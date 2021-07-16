const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const HttpError = require('../models/http-error');
const Memory = require('../models/memories');
const MemoryService = require('../services/memory-services');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

const getMemories = async (req, res, next) => {
  let memories;
  try {
    memories = await Memory.find().sort({ orderingDate: -1 });
  } catch (err) {
    const error = new HttpError(
      'Bir hatayla karşılaşıldı. Anılar yüklenemiyor !',
      500
    );
    return next(error);
  }
  res.json({
    memories: memories.map(memory => memory.toObject({ getters: true })),
  });
};

const getFirstThreeMemories = async (req, res, next) => {
  let memories;
  try {
    memories = await Memory.find().sort({ orderingDate: -1 }).limit(3);
  } catch (err) {
    const error = new HttpError(
      'Bir hatayla karşılaşıldı. Anılar yüklenemiyor !',
      500
    );
    return next(error);
  }
  res.json({
    memories: memories.map(memory => memory.toObject({ getters: true })),
  });
};

const updateMemory = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError('Başlık veya içeriği boş bıraktınız...', 422));
  }
  try {
    const response = await MemoryService.updateMemory(req, res);
    if (response.status === 200 || response.status === 201) {
      res
        .status(response.status)
        .json({ message: response.data.message, memory: response.data.memory });
    } else {
      res.status(response.status).send({ message: response.message });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const addImage = async (req, res, next) => {
  const memoryId = req.params.mid;

  let memory;
  try {
    memory = await Memory.findById(memoryId);
  } catch (err) {
    const error = new HttpError(
      'Bir şeyler ters gitti, fotoğraf eklenemiyor.',
      500
    );
    return next(error);
  }

  if (!memory) {
    const error = new HttpError('Böyle bir anı bulunamadı', 404);
    return next(error);
  }
  let myFile = req.file.originalname.split('.');
  const fileType = myFile[myFile.length - 1];

  let veri;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${uuidv4()}.${fileType}`,
    Body: req.file.buffer,
  };

  s3.upload(params, async (error, data) => {
    if (error) {
      res.status(500).send(error);
    }
    veri = data.Key;

    memory.imageUrl = veri;

    try {
      await memory.save();
    } catch (error) {
      const err = new HttpError(
        'Bir şeyler ters gitti, fotoğraf eklenemiyor.',
        500
      );
      return next(err);
    }

    res.status(201).json({
      message: {
        type: 'success',
        content: 'Fotoğraf eklendi 😊',
      },
      memory: memory,
    });
  });
};

const deleteImage = async (req, res, next) => {
  const memoryId = req.params.mid;

  let memory;
  try {
    memory = await Memory.findById(memoryId).populate('kullanici');
  } catch (err) {
    const error = new HttpError(
      'Bir şeyler ters gitti, fotoğraf kaldırılamıyor.',
      500
    );
    return next(error);
  }

  if (!memory) {
    const error = new HttpError('Böyle bir anı bulunamadı', 404);
    return next(error);
  }

  const imagePath = memory.imageUrl;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: imagePath,
  };

  s3.deleteObject(params, async (error, data) => {
    if (error) {
      const err = new HttpError(
        'Bir şeyler ters gitti, fotoğraf silinemiyor.',
        500
      );
      return next(err);
    }

    memory.imageUrl = '';

    try {
      await memory.save();
    } catch (error) {
      const err = new HttpError(
        'Bir şeyler ters gitti, fotoğraf silinemiyor.',
        500
      );
      return next(err);
    }

    res.status(200).json({
      message: {
        type: 'info',
        content: 'Fotoğraf başarıyla silindi.',
      },
    });
  });
};

const deleteMemory = async (req, res, next) => {
  const memoryId = req.params.mid;

  let memory;
  try {
    memory = await Memory.findById(memoryId).populate('kullanici');
  } catch (err) {
    res.status(500).send({
      message: 'Bir şeyler ters gitti.',
    });
  }

  if (!memory) {
    res.status(404).send({
      message: 'Anı bulunamadı.',
    });
  }

  MemoryService.startTransaction(memory, req, res); //transaction and delete image from s3 bucket
};

const createMemory = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).send({
      message: 'Başlık ve içerik boş bırakılamaz! Lütfen tekrar deneyin.',
    });
  }
  try {
    const response = await MemoryService.createMemory(req, res);
    if (response.status === 200 || response.status === 201) {
      res.status(response.status).json({ memory: response.memory });
    } else {
      res.status(response.status).send({ message: response.message });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = {
  getMemories,
  getFirstThreeMemories,
  updateMemory,
  deleteImage,
  deleteMemory,
  createMemory,
  addImage,
};

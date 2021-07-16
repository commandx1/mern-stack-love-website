const AWS = require('aws-sdk');

const { newDate } = require('./helpers');
const mongoose = require('mongoose');

const User = require('../models/user');
const Memory = require('../models/memories');

const { v4: uuidv4 } = require('uuid');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

const createMemory = async (req, res) => {
  const { title, content, kullanici, username } = req.body;

  let user;
  try {
    user = await User.findById(kullanici);
  } catch (err) {
    return {
      status: 500,
      message: 'Anı oluştururken hata meydana geldi, lütfen tekrar deneyiniz',
    };
  }

  if (!user) {
    return {
      status: 404,
      message: 'Kullanıcı bulunamadı.',
    };
  }

  let createdMemory;

  if (req.file) {
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
        return {
          status: 500,
          message: error,
        };
      }
      veri = data.Key;

      createdMemory = new Memory({
        title,
        content,
        kullanici,
        username,
        imageUrl: veri,
        date: newDate(),
        update: newDate(),
        orderingDate: new Date(),
      });

      try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdMemory.save({ session: sess });
        user.memories.push(createdMemory);
        await user.save({ session: sess });
        await sess.commitTransaction();
      } catch (err) {
        return {
          status: 500,
          message:
            'Anı oluştururken hata meydana geldi, lütfen tekrar deneyiniz',
        };
      }
      res.status(201).json({ memory: createdMemory });
    });
  } else {
    createdMemory = new Memory({
      title,
      content,
      kullanici,
      username,
      date: newDate(),
      update: newDate(),
      orderingDate: new Date(),
    });

    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await createdMemory.save({ session: sess });
      user.memories.push(createdMemory);
      await user.save({ session: sess });
      await sess.commitTransaction();
    } catch (err) {
      return {
        status: 500,
        message: 'Anı oluştururken hata meydana geldi, lütfen tekrar deneyiniz',
      };
    }
    return {
      status: 201,
      memory: createdMemory,
    };
  }
};

const updateMemory = async (req, res) => {
  const { title, content } = req.body;
  const memoryId = req.params.mid;

  let memory;
  try {
    memory = await Memory.findById(memoryId);
  } catch (err) {
    return {
      status: 500,
      message: 'Bir şeyler ters gitti, değişiklik yapılamadı.😢....',
    };
  }

  if (!memory) {
    return {
      status: 404,
      message: 'Anı bulunamadı.',
    };
  }

  if (memory.title === title && memory.content === content) {
    return {
      status: 200,
      data: {
        memory: memory.toObject({ getters: true }),
        message: {
          type: 'warning',
          content: 'Değişiklik yapmadınız !',
        },
      },
    };
  } else {
    memory.title = title;
    memory.content = content;
    memory.update = newDate();
    memory.orderingDate = new Date();
    try {
      await memory.save();
    } catch (err) {
      return {
        status: 500,
        message: 'Bir şeyler ters gitti, değişiklik yapılamadı.😢',
      };
    }

    return {
      status: 200,
      data: {
        message: {
          type: 'success',
          content: 'Değişiklikler başarıyla kaydedildi 😊',
        },
        memory: memory.toObject({ getters: true }),
      },
    };
  }
};

const startTransaction = async (memory, req, res) => {
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await memory.remove({ session: sess });
    memory.kullanici.memories.pull(memory);
    await memory.kullanici.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    res.status(500).send({
      message: 'Bir şeyler ters gitti.',
    });
  }

  if (
    memory?.imageUrl !== '' &&
    memory?.imageUrl !== undefined &&
    memory?.imageUrl !== null
  ) {
    const imagePath = memory?.imageUrl;

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: imagePath,
    };

    s3.deleteObject(params, (error, data) => {
      if (error) {
        res.status(500).send({
          message: 'Bir şeyler ters gitti.',
        });
      }

      res.status(200).json({
        message: {
          type: 'info',
          content: 'Anı başarıyla silindi.',
        },
      });
    });
  }

  res.status(200).json({
    message: {
      type: 'info',
      content: 'Anı başarıyla silindi...',
    },
  });
}; // transaction and delete image from s3 storage

module.exports = {
  createMemory,
  updateMemory,
  startTransaction,
};

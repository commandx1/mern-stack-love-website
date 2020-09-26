const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const MyNotification = require("../models/notification");

const getNotifications = async (req, res, next) => {
  let userId = req.params.uid;
  let notifications;
  try {
    notifications = await MyNotification.find({ 'userId': { $ne: userId } })
  } catch (err) {
    res.status(500).send({ message: "Bildirimler Yüklenemiyor 😢" });
  }
  res.json({
    notifications: notifications.map((notification) =>
      notification.toObject({ getters: true })
    ),
  });
};

const markAsRead = async (req, res, next) => {
  const notificationId = req.params.nid;

  const { read } = req.body 

  let notification;
  try {
    notification = await MyNotification.findById(notificationId);
  } catch (err) {
    res.status(500).send({ message: "Bir şeyler ters gitti 😢" });
  }

  if (typeof (read) == "boolean") {
      notification.read = read
  } else {
      res.status(500).send({message: 'Geçersiz veri tipi.'})
  }
  try {
    await notification.save();
  } catch (err) {
    res.status(500).send({ message: "Bir şeyler ters gitti 😢" });
  }

  res.status(200).json({
    notification: notification.toObject({ getters: true }),
  });
};

const deleteNotification = async (req, res, next) => {
  const notificationId = req.params.nid;

  let notification;
  try {
    notification = await MyNotification.findById(notificationId);
  } catch (err) {
    res
      .status(500)
      .send({ message: "Bir şeyler ters gitti, bildirim silinemiyor." });
  }

  if (!notification) {
    res.status(404).send({ message: "Bildirim bulunamadı" });
  }

  try {
    await notification.remove();
  } catch (err) {
    res
      .status(500)
      .send({ message: "Bir şeyler ters gitti, bildirim silinemiyor." });
  }

  res.status(200).json({
    message: {
      type: "info",
      content: "Bildirim başarıyla silindi...",
    },
  });
};

const createNotification = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).send({message: "Kullanıcı adı, kullanıcı id'si ve içerik boş bırakılamaz!"})
  }

  const { content, username, userId, redirect } = req.body;

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  const year = date.getFullYear();

  const myDate = day + "." + month + "." + year

 const createdNotification = new MyNotification({
    content,
    username,
    userId,
    redirect,
    read: false,
    date: myDate,
  });

  try {
    await createdNotification.save();
  } catch (err) {
    res.status(500).send({
      message:
        "bildirim oluştururkennn hata meydana geldi, lütfen tekrar deneyiniz.",
    });
  }

  res.status(201).json({ notification: createdNotification });
};

exports.createNotification = createNotification;
exports.deleteNotification = deleteNotification;
exports.getNotifications = getNotifications;
exports.markAsRead = markAsRead;

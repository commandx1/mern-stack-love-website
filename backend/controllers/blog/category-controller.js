const { validationResult } = require("express-validator");
const HttpError = require("../../models/http-error");
const Category = require("../../models/blog/category");
const Blog = require("../../models/blog/blog");

const getCategories = async (req, res, next) => {
  let categories;
  try {
    categories = await Category.find();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, lütfen tekrar deneyinizz.",
      500
    );
    return next(error);
  }
  if (!categories) {
    const error = new HttpError("Kategori bulunamadı.", 404);
    return next(error);
  }

  res.json({
    categories: categories.map((category) =>
      category.toObject({ getters: true })
    ),
  });
};

const createCategory = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Kategoriye isim vermediniz. Lütfen tekrar deneyiniz.", 422)
    );
  }
  const { title, label } = req.body;

  let existingCategory;
  try {
    existingCategory = await Category.findOne({ title: title });
  } catch (err) {
    const error = new HttpError(
      "Kayıt sırasında bir haya meydana geldi, lütfen tekrar deneyin.",
      500
    );
    return next(error);
  }

  if (existingCategory) {
    const error = new HttpError(
      "Böyle kategori zaten var, lütfen başka bir kategori ismi deneyiniz.",
      422
    );
    return next(error);
  }

  const createdCategory = new Category({
    title,
    label,
    posts: [],
  });

  try {
    await createdCategory.save();
  } catch (err) {
    const error = new HttpError(
      "Kayıt sırasında bir hata meydana geldi, lütfen tekrar deneyin.",
      500
    );
    return next(error);
  }

  res.status(201).json({
    message: `${createdCategory.label} isimli kategori başarıyla oluşturuldu.`,
    kategori: createdCategory.toObject({ getters: true }),
  });
};

const updateCategory = async (req, res, next) => {
  const { title, label } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Kategoriye isim vermediniz, lütfen tekrar deneyiniz.", 422)
    );
  }

  const categoryId = req.params.cid;

  let category;
  try {
    category = await Category.findById(categoryId);
  } catch (err) {
    const error = new HttpError("Bir şeyler ters gitti.", 500);
    return next(error);
  }

  if (!category) {
    const error = new HttpError(
      "Değiştirmek istediğiniz kategori bulunamadı.",
      404
    );
    return next(error);
  }

  let existingCategory;
  try {
    existingCategory = await Category.findOne({ title: title });
  } catch (err) {
    const error = new HttpError(
      "Güncelleme sırasında bir haya meydana geldi, lütfen tekrar deneyin.",
      500
    );
    return next(error);
  }

  if (existingCategory) {
    const error = new HttpError(
      "Böyle kategori zaten var, lütfen başka bir kategori ismi deneyiniz.",
      422
    );
    return next(error);
  }

  category.title = title;
  category.label = label;

  try {
    await category.save();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, değişiklik yapılamadı",
      500
    );
    return next(error);
  }

  res.status(200).json({
    message: "Değişikler başarıyla kaydedildi !",
    category: category.toObject({ getters: true }),
  });
};

const deleteCategory = async (req, res, next) => {
  const categoryId = req.params.cid;

  let category;
  try {
    category = await Category.findById(categoryId);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, kategori silinemiyor.",
      500
    );
    return next(error);
  }

  if (!category) {
    const error = new HttpError("Böyle bir kategori bulunamadı", 404);
    return next(error);
  }

  try {
    await category.remove();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, kategori silinemiyor.",
      500
    );
    return next(error);
  }

  try {
    let postIds = category.posts.map((post) => post._id);
    await Blog.deleteMany({
      _id: {
        $in: postIds,
      },
    });
  } catch (err) {
    next(new HttpError("Bir şeyler ters gitti...", 500));
  }

  res.status(200).json({
    message: "Kategori başarıyla silindi...",
  });
};

exports.createCategory = createCategory;
exports.updateCategory = updateCategory;
exports.deleteCategory = deleteCategory;
exports.getCategories = getCategories;

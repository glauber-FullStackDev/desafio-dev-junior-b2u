import joi from "joi";

const createAdSchema = joi.object({
  picture: joi.string().required(),
  name: joi.string().required(),
  price: joi.string().required(),
  mark: joi.string().required(),
  year: joi.string().required(),
  description: joi.string().required(),
});

const editPicSchema = joi.object({
  picture: joi.string().required(),
});

const editNameSchema = joi.object({
  name: joi.string().required(),
});

const editPriceSchema = joi.object({
  price: joi.string().required(),
});

const editMarkSchema = joi.object({
  mark: joi.string().required(),
});

const editYearSchema = joi.object({
  year: joi.string().required(),
});

const editDescSchema = joi.object({
  description: joi.string().required(),
});

export {
  createAdSchema,
  editPicSchema,
  editNameSchema,
  editPriceSchema,
  editMarkSchema,
  editYearSchema,
  editDescSchema,
};

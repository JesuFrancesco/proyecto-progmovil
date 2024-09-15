import Joi from "joi";

// main attributes
const id = Joi.number();
const reference_address = Joi.string();
const distritoId = Joi.number().integer();
const provinciaId = Joi.number().integer();
const departamentoId = Joi.number().integer();

const getUserByIdSchema = Joi.object({
  id: id.required(),
});

const updateUserSchema = Joi.object({
  id: id,
  reference_address: reference_address,
  distritoId: distritoId,
  provinciaId: provinciaId,
  departamentoId: departamentoId,
});

export { getUserByIdSchema, updateUserSchema };

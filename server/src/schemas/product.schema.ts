import Joi from "joi";

// main attributes
const id = Joi.number();
const name = Joi.string();
const price = Joi.number();
const stock = Joi.number();
const dimensions = Joi.string();
const warranty = Joi.string();
const discount = Joi.number();
const peso = Joi.number();
const anho_edicion = Joi.number();
const num_paginas = Joi.number();

const createProductSchema = Joi.object({
  id: id,
  name: name.required(),
  price: price.required(),
  stock: price.required(),
  dimensions: dimensions,
  warranty: warranty,
  discount: discount,
  peso: peso,
  anho_edicion: anho_edicion,
  num_paginas: num_paginas,
});

const updateProductSchema = Joi.object({
  id: id,
  name: name,
  price: price,
  stock: stock,
  dimensions: dimensions,
  warranty: warranty,
  discount: discount,
  peso: peso,
  anho_edicion: anho_edicion,
  num_paginas: num_paginas,
});

const getProductSchema = Joi.object({ id: id.required() });

const getProductByNameSchema = Joi.object({ name: name.required() });

export { createProductSchema, getProductSchema, getProductByNameSchema, updateProductSchema }

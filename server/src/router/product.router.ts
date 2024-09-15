import { Router } from "express";
import { validatorHandler } from "../middleware/validator.handler";
import ProductService from "../service/product.service";
import _ from "lodash";
import {
  createProductSchema,
  getProductSchema,
  getProductByNameSchema,
  updateProductSchema,
} from "../schemas/product.schema";

const router = Router();
const service = new ProductService();

router.get(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const accountId = parseInt(id);

      const account = await service.findOne(accountId);

      res.json(account);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/", async (req, res, next) => {
  try {
    const { search } = req.query;

    const accounts = search
      ? await service.findByName(search as string)
      : await service.findAll();
      
    res.json(accounts);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createProductSchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const account = await service.create(data);
      res.json(account);
    } catch (error) {
      next(error);
    }
  }
);

export default router;

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

      const account = await service.findOneProduct(accountId);

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
      ? await service.findProductsByName(search as string)
      : await service.findAllProducts();
      
    res.json(accounts);
  } catch (error) {
    next(error);
  }
});

export default router;

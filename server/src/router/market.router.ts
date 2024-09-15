import { Router } from "express";
import { validatorHandler } from "../middleware/validator.handler";
import ProductService from "../service/product.service";
import _, { toNumber } from "lodash";
import {
  createProductSchema,
  getProductSchema,
  getProductByNameSchema,
  updateProductSchema,
} from "../schemas/product.schema";
import { getMarketSchema } from "../schemas/market.schema";
import MarketService from "../service/market.service";

const router = Router();
const productService = new ProductService();
const marketService = new MarketService();

router.post(
  "/:id",
  validatorHandler(getMarketSchema, "params"),
  validatorHandler(createProductSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const account = await marketService.postMarketProduct(data, toNumber(id));
      res.json(account);
    } catch (error) {
      next(error);
    }
  }
);

export default router;

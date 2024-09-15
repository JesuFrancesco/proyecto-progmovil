import { Router } from "express";
import { validatorHandler } from "../middleware/validator.handler";
import UserService from "../service/user.service";
import _ from "lodash";
import { getUserByIdSchema, updateUserSchema } from "../schemas/user.schema";

const router = Router();
const service = new UserService();

// router.get(
//   "/:id",
//   validatorHandler(getAccountSchema, "params"),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;

//       const accountId = parseInt(id);

//       const account = await service.findOne(accountId);

//       res.json(account);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

router.get("/", async (req, res, next) => {
  try {
    const users = await service.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.patch(
  "/:id",
  validatorHandler(getUserByIdSchema, "params"),
  validatorHandler(updateUserSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const data = req.body;
      const account = await service.update(parseInt(id), data);
      res.json(account);
    } catch (error) {
      next(error);
    }
  }
);

export default router;

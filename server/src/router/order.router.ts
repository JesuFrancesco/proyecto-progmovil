import { sb } from "../app";
import { OrderRouter } from "../generated/express/Order";
import { authHandler } from "../middleware/authorization.handler";
import { OrderService } from "../service/order.service";
import { commonRouterConfig } from "./const";

const orderRouter = OrderRouter(commonRouterConfig);

orderRouter.post("/procesar-pago", authHandler, async (req, res) => {
  const service = new OrderService();

  const { data } = req.body;

  const {
    data: {
      user: { user_metadata },
    },
  } = await sb.auth.getUser();

  const clientId = user_metadata["client_id"];
  const ShoppingCartId = user_metadata["cart_id"];

  const createdOrder = await service.procesarPago(
    clientId,
    ShoppingCartId,
    data
  );

  return createdOrder;
});

export default orderRouter;

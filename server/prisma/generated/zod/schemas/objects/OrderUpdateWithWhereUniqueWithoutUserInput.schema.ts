import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutUserInputObjectSchema } from './OrderUpdateWithoutUserInput.schema';
import { OrderUncheckedUpdateWithoutUserInputObjectSchema } from './OrderUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => OrderUpdateWithoutUserInputObjectSchema),
      z.lazy(() => OrderUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const OrderUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;

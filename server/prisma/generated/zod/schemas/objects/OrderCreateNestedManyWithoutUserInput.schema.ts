import { z } from 'zod';
import { OrderCreateWithoutUserInputObjectSchema } from './OrderCreateWithoutUserInput.schema';
import { OrderUncheckedCreateWithoutUserInputObjectSchema } from './OrderUncheckedCreateWithoutUserInput.schema';
import { OrderCreateOrConnectWithoutUserInputObjectSchema } from './OrderCreateOrConnectWithoutUserInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrderCreateWithoutUserInputObjectSchema),
        z.lazy(() => OrderCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => OrderUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => OrderUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => OrderCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => OrderCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => OrderWhereUniqueInputObjectSchema),
        z.lazy(() => OrderWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const OrderCreateNestedManyWithoutUserInputObjectSchema = Schema;

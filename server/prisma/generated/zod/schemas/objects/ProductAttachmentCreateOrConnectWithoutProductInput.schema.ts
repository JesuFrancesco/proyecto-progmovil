import { z } from 'zod';
import { ProductAttachmentWhereUniqueInputObjectSchema } from './ProductAttachmentWhereUniqueInput.schema';
import { ProductAttachmentCreateWithoutProductInputObjectSchema } from './ProductAttachmentCreateWithoutProductInput.schema';
import { ProductAttachmentUncheckedCreateWithoutProductInputObjectSchema } from './ProductAttachmentUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentCreateOrConnectWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductAttachmentWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductAttachmentCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductAttachmentUncheckedCreateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductAttachmentCreateOrConnectWithoutProductInputObjectSchema =
  Schema;

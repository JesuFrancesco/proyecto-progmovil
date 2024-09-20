import { z } from 'zod';
import { ProductAttachmentWhereUniqueInputObjectSchema } from './ProductAttachmentWhereUniqueInput.schema';
import { ProductAttachmentUpdateWithoutProductInputObjectSchema } from './ProductAttachmentUpdateWithoutProductInput.schema';
import { ProductAttachmentUncheckedUpdateWithoutProductInputObjectSchema } from './ProductAttachmentUncheckedUpdateWithoutProductInput.schema';
import { ProductAttachmentCreateWithoutProductInputObjectSchema } from './ProductAttachmentCreateWithoutProductInput.schema';
import { ProductAttachmentUncheckedCreateWithoutProductInputObjectSchema } from './ProductAttachmentUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductAttachmentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductAttachmentUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductAttachmentUncheckedUpdateWithoutProductInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ProductAttachmentCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductAttachmentUncheckedCreateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductAttachmentUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;

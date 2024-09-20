import { z } from 'zod';
import { ProductAttachmentWhereUniqueInputObjectSchema } from './ProductAttachmentWhereUniqueInput.schema';
import { ProductAttachmentUpdateWithoutProductInputObjectSchema } from './ProductAttachmentUpdateWithoutProductInput.schema';
import { ProductAttachmentUncheckedUpdateWithoutProductInputObjectSchema } from './ProductAttachmentUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductAttachmentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductAttachmentUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductAttachmentUncheckedUpdateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductAttachmentUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;

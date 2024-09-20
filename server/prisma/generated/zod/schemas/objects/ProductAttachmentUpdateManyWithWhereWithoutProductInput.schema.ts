import { z } from 'zod';
import { ProductAttachmentScalarWhereInputObjectSchema } from './ProductAttachmentScalarWhereInput.schema';
import { ProductAttachmentUpdateManyMutationInputObjectSchema } from './ProductAttachmentUpdateManyMutationInput.schema';
import { ProductAttachmentUncheckedUpdateManyWithoutProductAttachmentsInputObjectSchema } from './ProductAttachmentUncheckedUpdateManyWithoutProductAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentUpdateManyWithWhereWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductAttachmentScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductAttachmentUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProductAttachmentUncheckedUpdateManyWithoutProductAttachmentsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductAttachmentUpdateManyWithWhereWithoutProductInputObjectSchema =
  Schema;

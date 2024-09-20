import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentUncheckedCreateInput> = z
  .object({
    imageUrl: z.string(),
    productId: z.number(),
  })
  .strict();

export const ProductAttachmentUncheckedCreateInputObjectSchema = Schema;

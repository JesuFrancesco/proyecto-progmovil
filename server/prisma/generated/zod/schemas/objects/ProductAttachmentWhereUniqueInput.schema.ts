import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentWhereUniqueInput> = z
  .object({
    productId: z.number().optional(),
  })
  .strict();

export const ProductAttachmentWhereUniqueInputObjectSchema = Schema;

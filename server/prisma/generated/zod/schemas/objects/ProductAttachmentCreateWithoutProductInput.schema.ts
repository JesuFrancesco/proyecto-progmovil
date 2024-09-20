import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentCreateWithoutProductInput> = z
  .object({
    imageUrl: z.string(),
  })
  .strict();

export const ProductAttachmentCreateWithoutProductInputObjectSchema = Schema;

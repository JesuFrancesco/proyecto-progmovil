import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductAttachmentUncheckedCreateWithoutProductInput> =
  z
    .object({
      imageUrl: z.string(),
    })
    .strict();

export const ProductAttachmentUncheckedCreateWithoutProductInputObjectSchema =
  Schema;

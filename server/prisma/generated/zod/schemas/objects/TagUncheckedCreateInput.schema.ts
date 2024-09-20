import { z } from 'zod';
import { ProductTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './ProductTagUncheckedCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    productTags: z
      .lazy(
        () => ProductTagUncheckedCreateNestedManyWithoutTagInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TagUncheckedCreateInputObjectSchema = Schema;

import { z } from 'zod';
import { ProductTagScalarWhereInputObjectSchema } from './ProductTagScalarWhereInput.schema';
import { ProductTagUpdateManyMutationInputObjectSchema } from './ProductTagUpdateManyMutationInput.schema';
import { ProductTagUncheckedUpdateManyWithoutProductTagsInputObjectSchema } from './ProductTagUncheckedUpdateManyWithoutProductTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductTagUpdateManyWithWhereWithoutTagInput> = z
  .object({
    where: z.lazy(() => ProductTagScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ProductTagUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => ProductTagUncheckedUpdateManyWithoutProductTagsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ProductTagUpdateManyWithWhereWithoutTagInputObjectSchema = Schema;

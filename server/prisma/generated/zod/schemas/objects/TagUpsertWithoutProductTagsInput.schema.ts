import { z } from 'zod';
import { TagUpdateWithoutProductTagsInputObjectSchema } from './TagUpdateWithoutProductTagsInput.schema';
import { TagUncheckedUpdateWithoutProductTagsInputObjectSchema } from './TagUncheckedUpdateWithoutProductTagsInput.schema';
import { TagCreateWithoutProductTagsInputObjectSchema } from './TagCreateWithoutProductTagsInput.schema';
import { TagUncheckedCreateWithoutProductTagsInputObjectSchema } from './TagUncheckedCreateWithoutProductTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpsertWithoutProductTagsInput> = z
  .object({
    update: z.union([
      z.lazy(() => TagUpdateWithoutProductTagsInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutProductTagsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagCreateWithoutProductTagsInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutProductTagsInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpsertWithoutProductTagsInputObjectSchema = Schema;

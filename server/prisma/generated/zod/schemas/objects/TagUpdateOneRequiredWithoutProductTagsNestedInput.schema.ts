import { z } from 'zod';
import { TagCreateWithoutProductTagsInputObjectSchema } from './TagCreateWithoutProductTagsInput.schema';
import { TagUncheckedCreateWithoutProductTagsInputObjectSchema } from './TagUncheckedCreateWithoutProductTagsInput.schema';
import { TagCreateOrConnectWithoutProductTagsInputObjectSchema } from './TagCreateOrConnectWithoutProductTagsInput.schema';
import { TagUpsertWithoutProductTagsInputObjectSchema } from './TagUpsertWithoutProductTagsInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutProductTagsInputObjectSchema } from './TagUpdateWithoutProductTagsInput.schema';
import { TagUncheckedUpdateWithoutProductTagsInputObjectSchema } from './TagUncheckedUpdateWithoutProductTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutProductTagsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagCreateWithoutProductTagsInputObjectSchema),
          z.lazy(() => TagUncheckedCreateWithoutProductTagsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TagCreateOrConnectWithoutProductTagsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => TagUpsertWithoutProductTagsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TagUpdateWithoutProductTagsInputObjectSchema),
          z.lazy(() => TagUncheckedUpdateWithoutProductTagsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const TagUpdateOneRequiredWithoutProductTagsNestedInputObjectSchema =
  Schema;

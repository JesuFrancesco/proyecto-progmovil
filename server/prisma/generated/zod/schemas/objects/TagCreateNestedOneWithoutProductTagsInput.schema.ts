import { z } from 'zod';
import { TagCreateWithoutProductTagsInputObjectSchema } from './TagCreateWithoutProductTagsInput.schema';
import { TagUncheckedCreateWithoutProductTagsInputObjectSchema } from './TagUncheckedCreateWithoutProductTagsInput.schema';
import { TagCreateOrConnectWithoutProductTagsInputObjectSchema } from './TagCreateOrConnectWithoutProductTagsInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateNestedOneWithoutProductTagsInput> = z
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
    connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TagCreateNestedOneWithoutProductTagsInputObjectSchema = Schema;

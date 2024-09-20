import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutProductTagsInputObjectSchema } from './TagCreateWithoutProductTagsInput.schema';
import { TagUncheckedCreateWithoutProductTagsInputObjectSchema } from './TagUncheckedCreateWithoutProductTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateOrConnectWithoutProductTagsInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagCreateWithoutProductTagsInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutProductTagsInputObjectSchema),
    ]),
  })
  .strict();

export const TagCreateOrConnectWithoutProductTagsInputObjectSchema = Schema;

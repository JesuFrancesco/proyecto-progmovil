import { z } from 'zod';
import { RatingAttachmentScalarWhereInputObjectSchema } from './RatingAttachmentScalarWhereInput.schema';
import { RatingAttachmentUpdateManyMutationInputObjectSchema } from './RatingAttachmentUpdateManyMutationInput.schema';
import { RatingAttachmentUncheckedUpdateManyWithoutRatingAttachmentsInputObjectSchema } from './RatingAttachmentUncheckedUpdateManyWithoutRatingAttachmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentUpdateManyWithWhereWithoutProductRatingInput> =
  z
    .object({
      where: z.lazy(() => RatingAttachmentScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RatingAttachmentUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            RatingAttachmentUncheckedUpdateManyWithoutRatingAttachmentsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RatingAttachmentUpdateManyWithWhereWithoutProductRatingInputObjectSchema =
  Schema;

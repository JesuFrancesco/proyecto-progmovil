import { z } from 'zod';
import { RatingAttachmentWhereUniqueInputObjectSchema } from './RatingAttachmentWhereUniqueInput.schema';
import { RatingAttachmentUpdateWithoutProductRatingInputObjectSchema } from './RatingAttachmentUpdateWithoutProductRatingInput.schema';
import { RatingAttachmentUncheckedUpdateWithoutProductRatingInputObjectSchema } from './RatingAttachmentUncheckedUpdateWithoutProductRatingInput.schema';
import { RatingAttachmentCreateWithoutProductRatingInputObjectSchema } from './RatingAttachmentCreateWithoutProductRatingInput.schema';
import { RatingAttachmentUncheckedCreateWithoutProductRatingInputObjectSchema } from './RatingAttachmentUncheckedCreateWithoutProductRatingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentUpsertWithWhereUniqueWithoutProductRatingInput> =
  z
    .object({
      where: z.lazy(() => RatingAttachmentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => RatingAttachmentUpdateWithoutProductRatingInputObjectSchema,
        ),
        z.lazy(
          () =>
            RatingAttachmentUncheckedUpdateWithoutProductRatingInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => RatingAttachmentCreateWithoutProductRatingInputObjectSchema,
        ),
        z.lazy(
          () =>
            RatingAttachmentUncheckedCreateWithoutProductRatingInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RatingAttachmentUpsertWithWhereUniqueWithoutProductRatingInputObjectSchema =
  Schema;

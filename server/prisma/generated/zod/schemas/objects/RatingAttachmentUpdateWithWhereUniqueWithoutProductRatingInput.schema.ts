import { z } from 'zod';
import { RatingAttachmentWhereUniqueInputObjectSchema } from './RatingAttachmentWhereUniqueInput.schema';
import { RatingAttachmentUpdateWithoutProductRatingInputObjectSchema } from './RatingAttachmentUpdateWithoutProductRatingInput.schema';
import { RatingAttachmentUncheckedUpdateWithoutProductRatingInputObjectSchema } from './RatingAttachmentUncheckedUpdateWithoutProductRatingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentUpdateWithWhereUniqueWithoutProductRatingInput> =
  z
    .object({
      where: z.lazy(() => RatingAttachmentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => RatingAttachmentUpdateWithoutProductRatingInputObjectSchema,
        ),
        z.lazy(
          () =>
            RatingAttachmentUncheckedUpdateWithoutProductRatingInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RatingAttachmentUpdateWithWhereUniqueWithoutProductRatingInputObjectSchema =
  Schema;

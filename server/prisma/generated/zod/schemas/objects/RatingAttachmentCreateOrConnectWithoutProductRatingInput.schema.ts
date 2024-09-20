import { z } from 'zod';
import { RatingAttachmentWhereUniqueInputObjectSchema } from './RatingAttachmentWhereUniqueInput.schema';
import { RatingAttachmentCreateWithoutProductRatingInputObjectSchema } from './RatingAttachmentCreateWithoutProductRatingInput.schema';
import { RatingAttachmentUncheckedCreateWithoutProductRatingInputObjectSchema } from './RatingAttachmentUncheckedCreateWithoutProductRatingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentCreateOrConnectWithoutProductRatingInput> =
  z
    .object({
      where: z.lazy(() => RatingAttachmentWhereUniqueInputObjectSchema),
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

export const RatingAttachmentCreateOrConnectWithoutProductRatingInputObjectSchema =
  Schema;

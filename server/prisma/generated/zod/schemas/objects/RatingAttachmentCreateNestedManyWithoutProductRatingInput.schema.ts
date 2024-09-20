import { z } from 'zod';
import { RatingAttachmentCreateWithoutProductRatingInputObjectSchema } from './RatingAttachmentCreateWithoutProductRatingInput.schema';
import { RatingAttachmentUncheckedCreateWithoutProductRatingInputObjectSchema } from './RatingAttachmentUncheckedCreateWithoutProductRatingInput.schema';
import { RatingAttachmentCreateOrConnectWithoutProductRatingInputObjectSchema } from './RatingAttachmentCreateOrConnectWithoutProductRatingInput.schema';
import { RatingAttachmentWhereUniqueInputObjectSchema } from './RatingAttachmentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentCreateNestedManyWithoutProductRatingInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => RatingAttachmentCreateWithoutProductRatingInputObjectSchema,
          ),
          z
            .lazy(
              () => RatingAttachmentCreateWithoutProductRatingInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              RatingAttachmentUncheckedCreateWithoutProductRatingInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RatingAttachmentUncheckedCreateWithoutProductRatingInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              RatingAttachmentCreateOrConnectWithoutProductRatingInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RatingAttachmentCreateOrConnectWithoutProductRatingInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RatingAttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => RatingAttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RatingAttachmentCreateNestedManyWithoutProductRatingInputObjectSchema =
  Schema;

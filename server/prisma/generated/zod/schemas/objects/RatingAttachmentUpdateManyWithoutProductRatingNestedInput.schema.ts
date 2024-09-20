import { z } from 'zod';
import { RatingAttachmentCreateWithoutProductRatingInputObjectSchema } from './RatingAttachmentCreateWithoutProductRatingInput.schema';
import { RatingAttachmentUncheckedCreateWithoutProductRatingInputObjectSchema } from './RatingAttachmentUncheckedCreateWithoutProductRatingInput.schema';
import { RatingAttachmentCreateOrConnectWithoutProductRatingInputObjectSchema } from './RatingAttachmentCreateOrConnectWithoutProductRatingInput.schema';
import { RatingAttachmentUpsertWithWhereUniqueWithoutProductRatingInputObjectSchema } from './RatingAttachmentUpsertWithWhereUniqueWithoutProductRatingInput.schema';
import { RatingAttachmentWhereUniqueInputObjectSchema } from './RatingAttachmentWhereUniqueInput.schema';
import { RatingAttachmentUpdateWithWhereUniqueWithoutProductRatingInputObjectSchema } from './RatingAttachmentUpdateWithWhereUniqueWithoutProductRatingInput.schema';
import { RatingAttachmentUpdateManyWithWhereWithoutProductRatingInputObjectSchema } from './RatingAttachmentUpdateManyWithWhereWithoutProductRatingInput.schema';
import { RatingAttachmentScalarWhereInputObjectSchema } from './RatingAttachmentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RatingAttachmentUpdateManyWithoutProductRatingNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              RatingAttachmentUpsertWithWhereUniqueWithoutProductRatingInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RatingAttachmentUpsertWithWhereUniqueWithoutProductRatingInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => RatingAttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => RatingAttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RatingAttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => RatingAttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RatingAttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => RatingAttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RatingAttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => RatingAttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              RatingAttachmentUpdateWithWhereUniqueWithoutProductRatingInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RatingAttachmentUpdateWithWhereUniqueWithoutProductRatingInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              RatingAttachmentUpdateManyWithWhereWithoutProductRatingInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RatingAttachmentUpdateManyWithWhereWithoutProductRatingInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RatingAttachmentScalarWhereInputObjectSchema),
          z.lazy(() => RatingAttachmentScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RatingAttachmentUpdateManyWithoutProductRatingNestedInputObjectSchema =
  Schema;

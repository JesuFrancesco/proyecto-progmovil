import { z } from 'zod';
import { RatingAttachmentOrderByWithRelationInputObjectSchema } from './objects/RatingAttachmentOrderByWithRelationInput.schema';
import { RatingAttachmentWhereInputObjectSchema } from './objects/RatingAttachmentWhereInput.schema';
import { RatingAttachmentWhereUniqueInputObjectSchema } from './objects/RatingAttachmentWhereUniqueInput.schema';
import { RatingAttachmentScalarFieldEnumSchema } from './enums/RatingAttachmentScalarFieldEnum.schema';

export const RatingAttachmentFindManySchema = z.object({
  orderBy: z
    .union([
      RatingAttachmentOrderByWithRelationInputObjectSchema,
      RatingAttachmentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RatingAttachmentWhereInputObjectSchema.optional(),
  cursor: RatingAttachmentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RatingAttachmentScalarFieldEnumSchema).optional(),
});

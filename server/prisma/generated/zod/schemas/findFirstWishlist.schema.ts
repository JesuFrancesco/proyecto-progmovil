import { z } from 'zod';
import { WishlistOrderByWithRelationInputObjectSchema } from './objects/WishlistOrderByWithRelationInput.schema';
import { WishlistWhereInputObjectSchema } from './objects/WishlistWhereInput.schema';
import { WishlistWhereUniqueInputObjectSchema } from './objects/WishlistWhereUniqueInput.schema';
import { WishlistScalarFieldEnumSchema } from './enums/WishlistScalarFieldEnum.schema';

export const WishlistFindFirstSchema = z.object({
  orderBy: z
    .union([
      WishlistOrderByWithRelationInputObjectSchema,
      WishlistOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: WishlistWhereInputObjectSchema.optional(),
  cursor: WishlistWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(WishlistScalarFieldEnumSchema).optional(),
});

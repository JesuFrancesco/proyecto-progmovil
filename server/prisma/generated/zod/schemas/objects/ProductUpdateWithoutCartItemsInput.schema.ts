import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { BrandSellerUpdateOneRequiredWithoutProductsNestedInputObjectSchema } from './BrandSellerUpdateOneRequiredWithoutProductsNestedInput.schema';
import { ProductAttachmentUpdateManyWithoutProductNestedInputObjectSchema } from './ProductAttachmentUpdateManyWithoutProductNestedInput.schema';
import { ProductTagUpdateManyWithoutProductNestedInputObjectSchema } from './ProductTagUpdateManyWithoutProductNestedInput.schema';
import { ProductQuestionUpdateManyWithoutProductNestedInputObjectSchema } from './ProductQuestionUpdateManyWithoutProductNestedInput.schema';
import { WishlistItemUpdateManyWithoutProductNestedInputObjectSchema } from './WishlistItemUpdateManyWithoutProductNestedInput.schema';
import { OrderItemUpdateManyWithoutProductNestedInputObjectSchema } from './OrderItemUpdateManyWithoutProductNestedInput.schema';
import { MarketProductUpdateManyWithoutProductNestedInputObjectSchema } from './MarketProductUpdateManyWithoutProductNestedInput.schema';
import { ProductRatingUpdateManyWithoutProductNestedInputObjectSchema } from './ProductRatingUpdateManyWithoutProductNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateWithoutCartItemsInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    stock: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    price: z
      .union([
        z.number(),
        z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    dimensions: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    warranty: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    discount: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    peso: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    formato: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    anhoEdicion: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    numeroPaginas: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    brandSeller: z
      .lazy(
        () =>
          BrandSellerUpdateOneRequiredWithoutProductsNestedInputObjectSchema,
      )
      .optional(),
    productAttachments: z
      .lazy(
        () => ProductAttachmentUpdateManyWithoutProductNestedInputObjectSchema,
      )
      .optional(),
    productTags: z
      .lazy(() => ProductTagUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    productQuestions: z
      .lazy(
        () => ProductQuestionUpdateManyWithoutProductNestedInputObjectSchema,
      )
      .optional(),
    wishlistItems: z
      .lazy(() => WishlistItemUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    orderItems: z
      .lazy(() => OrderItemUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    marketProducts: z
      .lazy(() => MarketProductUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    productRatings: z
      .lazy(() => ProductRatingUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductUpdateWithoutCartItemsInputObjectSchema = Schema;

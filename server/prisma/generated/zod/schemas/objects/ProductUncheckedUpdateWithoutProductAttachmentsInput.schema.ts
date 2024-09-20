import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { ProductTagUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './ProductTagUncheckedUpdateManyWithoutProductNestedInput.schema';
import { ProductQuestionUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './ProductQuestionUncheckedUpdateManyWithoutProductNestedInput.schema';
import { CartItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './CartItemUncheckedUpdateManyWithoutProductNestedInput.schema';
import { WishlistItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './WishlistItemUncheckedUpdateManyWithoutProductNestedInput.schema';
import { OrderItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutProductNestedInput.schema';
import { MarketProductUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './MarketProductUncheckedUpdateManyWithoutProductNestedInput.schema';
import { ProductRatingUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './ProductRatingUncheckedUpdateManyWithoutProductNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutProductAttachmentsInput> =
  z
    .object({
      id: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
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
      sellerId: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      productTags: z
        .lazy(
          () =>
            ProductTagUncheckedUpdateManyWithoutProductNestedInputObjectSchema,
        )
        .optional(),
      productQuestions: z
        .lazy(
          () =>
            ProductQuestionUncheckedUpdateManyWithoutProductNestedInputObjectSchema,
        )
        .optional(),
      cartItems: z
        .lazy(
          () =>
            CartItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema,
        )
        .optional(),
      wishlistItems: z
        .lazy(
          () =>
            WishlistItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema,
        )
        .optional(),
      orderItems: z
        .lazy(
          () =>
            OrderItemUncheckedUpdateManyWithoutProductNestedInputObjectSchema,
        )
        .optional(),
      marketProducts: z
        .lazy(
          () =>
            MarketProductUncheckedUpdateManyWithoutProductNestedInputObjectSchema,
        )
        .optional(),
      productRatings: z
        .lazy(
          () =>
            ProductRatingUncheckedUpdateManyWithoutProductNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ProductUncheckedUpdateWithoutProductAttachmentsInputObjectSchema =
  Schema;

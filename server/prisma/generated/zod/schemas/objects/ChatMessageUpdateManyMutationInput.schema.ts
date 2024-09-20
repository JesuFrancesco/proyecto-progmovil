import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatMessageUpdateManyMutationInput> = z
  .object({})
  .strict();

export const ChatMessageUpdateManyMutationInputObjectSchema = Schema;

import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChatParticipantUpdateManyMutationInput> = z
  .object({})
  .strict();

export const ChatParticipantUpdateManyMutationInputObjectSchema = Schema;

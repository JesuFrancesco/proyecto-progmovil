import { z } from 'zod';

export const ChatParticipantScalarFieldEnumSchema = z.enum([
  'chatId',
  'userId',
]);

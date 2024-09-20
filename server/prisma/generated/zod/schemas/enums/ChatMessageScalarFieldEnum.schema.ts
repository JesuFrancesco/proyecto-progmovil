import { z } from 'zod';

export const ChatMessageScalarFieldEnumSchema = z.enum(['chatId', 'messageId']);

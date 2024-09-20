import { z } from 'zod';

export const MessageAttachmentScalarFieldEnumSchema = z.enum([
  'id',
  'blobUrl',
  'filename',
  'type',
  'messageId',
]);

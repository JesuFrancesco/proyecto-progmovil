import { z } from 'zod';

export const RatingAttachmentScalarFieldEnumSchema = z.enum([
  'blobUrl',
  'filename',
  'type',
  'ratingId',
]);

import { DMMF } from '@prisma/generator-helper'
import { toPascalCase } from '../utils/strings'

/**
 * Generates an Express middleware function that handles creation of records and includes conditional output validation with Zod.
 * This version dynamically includes the correct type for the arguments based on the Prisma model.
 * @param options - The options containing the model name and the import statement for Prisma types.
 * @returns {string} - The generated middleware function as a string.
 */
export const generateCreateFunction = (options: {
  model: DMMF.Model
  prismaImportStatement: string
}): string => {
  const { model, prismaImportStatement } = options
  const modelName = model.name
  const functionName = `${modelName}Create`
  const argsTypeName = `Prisma.${modelName}CreateArgs`

  return `
${prismaImportStatement}
import { Request, Response, NextFunction } from 'express';
import { RequestHandler, ParamsDictionary } from 'express-serve-static-core'
import { ZodTypeAny } from 'zod';

interface CreateRequest extends Request {
  prisma: PrismaClient;
  body: ${argsTypeName};
  outputValidation?: ZodTypeAny;
  locals?: {
    outputValidator?: ZodTypeAny;
  };
}

export type CreateMiddleware = RequestHandler<ParamsDictionary, any, ${argsTypeName}, Record<string, any>>

export async function ${functionName}(req: CreateRequest, res: Response, next: NextFunction) {
  try {
    const outputValidator = req.locals?.outputValidator || req.outputValidation;

    const data = await req.prisma.${toPascalCase(modelName)}.create(req.body);

    if (outputValidator) {
      const validationResult = outputValidator.safeParse(data);
      if (validationResult.success) {
        return res.status(201).json(validationResult.data);
      } else {
        return res.status(400).json({ error: 'Invalid data format', details: validationResult.error });
      }
    } else {
      return res.status(201).json(data);
    }
  } catch(error: unknown) {
    next(error)
  }
}`
}

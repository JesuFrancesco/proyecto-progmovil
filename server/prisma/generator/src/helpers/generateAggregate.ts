import { DMMF } from '@prisma/generator-helper'
import { capitalize, toPascalCase } from '../utils/strings'

/**
 * Generates an Express middleware function that handles aggregation queries
 * and includes conditional output validation with Zod.
 * This version dynamically includes the correct type for the arguments based on the Prisma model.
 * @param options - The options containing the model name and the import statement for Prisma types.
 * @returns {string} - The generated middleware function as a string.
 */
export const generateAggregateFunction = (options: {
  model: DMMF.Model
  prismaImportStatement: string
}): string => {
  const { model, prismaImportStatement } = options
  const modelName = model.name
  const functionName = `${modelName}Aggregate`
  const argsTypeName = `Prisma.${capitalize(modelName)}AggregateArgs`

  return `
${prismaImportStatement}
import { Request, Response, NextFunction } from 'express';
import { RequestHandler, ParamsDictionary } from 'express-serve-static-core'
import { ParsedQs } from 'qs'
import { ZodTypeAny } from 'zod';
import { ValidatorConfig } from '../routeConfig'

interface AggregateRequest extends Request {
  prisma: PrismaClient;
  query: Partial<${argsTypeName}> & ParsedQs;
  outputValidation?: ZodTypeAny;
  locals?: {
    outputValidator?: ZodTypeAny;
  };
}

export type AggregateMiddleware = RequestHandler<ParamsDictionary, any, Partial<${argsTypeName}>, Record<string, any>>;

export async function ${functionName}(req: AggregateRequest, res: Response, next: NextFunction) {
  try {
    const outputValidator = res.locals.outputValidator?.schema || req.outputValidation;

    const result = await req.prisma.${toPascalCase(modelName)}.aggregate(req.query as ${argsTypeName});

    if (outputValidator) {
      const validationResult = outputValidator.safeParse(result);
      if (validationResult.success) {
        return res.status(200).json(validationResult.data);
      } else {
        return res.status(400).json({ error: 'Invalid data format', details: validationResult.error });
      }
    } else {
      return res.status(200).json(result);
    }
  } catch(error: unknown) {
    next(error)
  }
}`
}
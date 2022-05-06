import type { ValidatedEventSQS } from '@libs/sqs';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const sqsHandler: ValidatedEventSQS<typeof schema> = async (event) => {
  console.log(event.Records[0].body)
};

export const main = middyfy(sqsHandler);

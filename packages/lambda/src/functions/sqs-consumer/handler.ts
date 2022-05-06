import type { ValidatedEventSQS } from '@libs/sqs';
import { middyfy } from '@libs/lambda';
interface User {
  name: string;
  email: string;
}
const sqsHandler: ValidatedEventSQS<User> = async (event) => {
  console.log(event.Records[0].body)
};

export const main = middyfy(sqsHandler);

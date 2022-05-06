import { handlerPath } from '@libs/handler-resolver';
import { AWSFunction } from '@custom-types/aws-serverless';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      sqs: {
        arn: "arn:aws:sqs:us-east-1:123456789012:MyQueue"
      }
    },
  ],
} as AWSFunction;

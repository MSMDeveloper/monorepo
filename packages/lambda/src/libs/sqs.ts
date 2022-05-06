import type { SQSEvent, Handler, SQSRecord } from "aws-lambda"
import type { FromSchema } from "json-schema-to-ts";

type CustomSQSRecord<S> = Omit<SQSRecord, 'body'> & { body: FromSchema<S> }
type ValidatedSQSEvent<S> = Omit<SQSEvent, 'Records'> & { Records: CustomSQSRecord<S>[] }

export type ValidatedEventSQS<S> = Handler<ValidatedSQSEvent<S>, void>

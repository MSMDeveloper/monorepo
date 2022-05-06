import type { SQSEvent, Handler, SQSRecord } from "aws-lambda"

type CustomSQSRecord<S> = Omit<SQSRecord, 'body'> & { body: S }
type ValidatedSQSEvent<S> = Omit<SQSEvent, 'Records'> & { Records: CustomSQSRecord<S>[] }

export type ValidatedEventSQS<S> = Handler<ValidatedSQSEvent<S>, void>

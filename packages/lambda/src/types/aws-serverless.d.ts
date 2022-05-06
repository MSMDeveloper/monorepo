import type { AWS  } from "@serverless/typescript";

declare const aws: AWS;

export type AWSFunction = typeof aws.functions[0]
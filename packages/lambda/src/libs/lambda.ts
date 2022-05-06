import middy from "@middy/core"
import middyJsonBodyParser from "@middy/sqs-json-body-parser"

export const middyfy = (handler) => {
  return middy(handler).use(middyJsonBodyParser())
}


import { Context } from './Context'


class YesAsAServiceError extends Error {

  isYesAsAServiceError = true

  sdk = 'YesAsAService'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  YesAsAServiceError
}


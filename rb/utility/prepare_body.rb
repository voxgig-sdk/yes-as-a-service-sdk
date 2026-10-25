# YesAsAService SDK utility: prepare_body
require_relative 'media'
module YesAsAServiceUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return YesAsAServiceUtilities.raw_body(ctx.reqdata) if YesAsAServiceUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end

# YesAsAService SDK utility: make_context
require_relative '../core/context'
module YesAsAServiceUtilities
  MakeContext = ->(ctxmap, basectx) {
    YesAsAServiceContext.new(ctxmap, basectx)
  }
end

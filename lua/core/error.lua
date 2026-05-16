-- YesAsAService SDK error

local YesAsAServiceError = {}
YesAsAServiceError.__index = YesAsAServiceError


function YesAsAServiceError.new(code, msg, ctx)
  local self = setmetatable({}, YesAsAServiceError)
  self.is_sdk_error = true
  self.sdk = "YesAsAService"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function YesAsAServiceError:error()
  return self.msg
end


function YesAsAServiceError:__tostring()
  return self.msg
end


return YesAsAServiceError

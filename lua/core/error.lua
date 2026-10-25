-- YesAsAService SDK error

local json = require("dkjson")

local YesAsAServiceError = {}
YesAsAServiceError.__index = YesAsAServiceError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function YesAsAServiceError.new(code, msg, ctx)
  local self = setmetatable({}, YesAsAServiceError)
  self.is_sdk_error = true
  self.sdk = "YesAsAService"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  self.status = -1
  CONTEXT[self] = ctx
  return self
end


function YesAsAServiceError:context()
  return CONTEXT[self]
end


function YesAsAServiceError:error()
  return self.msg
end


function YesAsAServiceError:not_found()
  return 404 == self.status
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function YesAsAServiceError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function YesAsAServiceError:to_json()
  return json.encode(self:to_table())
end


function YesAsAServiceError:__tostring()
  return self.msg
end


function YesAsAServiceError.__tojson(self)
  return self:to_json()
end


return YesAsAServiceError

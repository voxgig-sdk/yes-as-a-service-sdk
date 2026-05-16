-- ProjectName SDK exists test

local sdk = require("yes-as-a-service_sdk")

describe("YesAsAServiceSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)

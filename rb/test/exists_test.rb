# YesAsAService SDK exists test

require "minitest/autorun"
require_relative "../YesAsAService_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = YesAsAServiceSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end

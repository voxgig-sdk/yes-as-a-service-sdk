# YesAsAService SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module YesAsAServiceFeatures
  def self.make_feature(name)
    case name
    when "base"
      YesAsAServiceBaseFeature.new
    when "ratelimit"
      YesAsAServiceRatelimitFeature.new
    when "retry"
      YesAsAServiceRetryFeature.new
    when "test"
      YesAsAServiceTestFeature.new
    when "timeout"
      YesAsAServiceTimeoutFeature.new
    else
      YesAsAServiceBaseFeature.new
    end
  end
end

# YesAsAService SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module YesAsAServiceFeatures
  def self.make_feature(name)
    case name
    when "base"
      YesAsAServiceBaseFeature.new
    when "test"
      YesAsAServiceTestFeature.new
    else
      YesAsAServiceBaseFeature.new
    end
  end
end

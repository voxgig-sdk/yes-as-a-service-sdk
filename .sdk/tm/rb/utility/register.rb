# YesAsAService SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

YesAsAServiceUtility.registrar = ->(u) {
  u.clean = YesAsAServiceUtilities::Clean
  u.done = YesAsAServiceUtilities::Done
  u.make_error = YesAsAServiceUtilities::MakeError
  u.feature_add = YesAsAServiceUtilities::FeatureAdd
  u.feature_hook = YesAsAServiceUtilities::FeatureHook
  u.feature_init = YesAsAServiceUtilities::FeatureInit
  u.fetcher = YesAsAServiceUtilities::Fetcher
  u.make_fetch_def = YesAsAServiceUtilities::MakeFetchDef
  u.make_context = YesAsAServiceUtilities::MakeContext
  u.make_options = YesAsAServiceUtilities::MakeOptions
  u.make_request = YesAsAServiceUtilities::MakeRequest
  u.make_response = YesAsAServiceUtilities::MakeResponse
  u.make_result = YesAsAServiceUtilities::MakeResult
  u.make_point = YesAsAServiceUtilities::MakePoint
  u.make_spec = YesAsAServiceUtilities::MakeSpec
  u.make_url = YesAsAServiceUtilities::MakeUrl
  u.param = YesAsAServiceUtilities::Param
  u.prepare_auth = YesAsAServiceUtilities::PrepareAuth
  u.prepare_body = YesAsAServiceUtilities::PrepareBody
  u.prepare_headers = YesAsAServiceUtilities::PrepareHeaders
  u.prepare_method = YesAsAServiceUtilities::PrepareMethod
  u.prepare_params = YesAsAServiceUtilities::PrepareParams
  u.prepare_path = YesAsAServiceUtilities::PreparePath
  u.prepare_query = YesAsAServiceUtilities::PrepareQuery
  u.result_basic = YesAsAServiceUtilities::ResultBasic
  u.result_body = YesAsAServiceUtilities::ResultBody
  u.result_headers = YesAsAServiceUtilities::ResultHeaders
  u.transform_request = YesAsAServiceUtilities::TransformRequest
  u.transform_response = YesAsAServiceUtilities::TransformResponse
}

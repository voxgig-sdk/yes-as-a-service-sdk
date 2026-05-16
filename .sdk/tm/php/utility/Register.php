<?php
declare(strict_types=1);

// YesAsAService SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

YesAsAServiceUtility::setRegistrar(function (YesAsAServiceUtility $u): void {
    $u->clean = [YesAsAServiceClean::class, 'call'];
    $u->done = [YesAsAServiceDone::class, 'call'];
    $u->make_error = [YesAsAServiceMakeError::class, 'call'];
    $u->feature_add = [YesAsAServiceFeatureAdd::class, 'call'];
    $u->feature_hook = [YesAsAServiceFeatureHook::class, 'call'];
    $u->feature_init = [YesAsAServiceFeatureInit::class, 'call'];
    $u->fetcher = [YesAsAServiceFetcher::class, 'call'];
    $u->make_fetch_def = [YesAsAServiceMakeFetchDef::class, 'call'];
    $u->make_context = [YesAsAServiceMakeContext::class, 'call'];
    $u->make_options = [YesAsAServiceMakeOptions::class, 'call'];
    $u->make_request = [YesAsAServiceMakeRequest::class, 'call'];
    $u->make_response = [YesAsAServiceMakeResponse::class, 'call'];
    $u->make_result = [YesAsAServiceMakeResult::class, 'call'];
    $u->make_point = [YesAsAServiceMakePoint::class, 'call'];
    $u->make_spec = [YesAsAServiceMakeSpec::class, 'call'];
    $u->make_url = [YesAsAServiceMakeUrl::class, 'call'];
    $u->param = [YesAsAServiceParam::class, 'call'];
    $u->prepare_auth = [YesAsAServicePrepareAuth::class, 'call'];
    $u->prepare_body = [YesAsAServicePrepareBody::class, 'call'];
    $u->prepare_headers = [YesAsAServicePrepareHeaders::class, 'call'];
    $u->prepare_method = [YesAsAServicePrepareMethod::class, 'call'];
    $u->prepare_params = [YesAsAServicePrepareParams::class, 'call'];
    $u->prepare_path = [YesAsAServicePreparePath::class, 'call'];
    $u->prepare_query = [YesAsAServicePrepareQuery::class, 'call'];
    $u->result_basic = [YesAsAServiceResultBasic::class, 'call'];
    $u->result_body = [YesAsAServiceResultBody::class, 'call'];
    $u->result_headers = [YesAsAServiceResultHeaders::class, 'call'];
    $u->transform_request = [YesAsAServiceTransformRequest::class, 'call'];
    $u->transform_response = [YesAsAServiceTransformResponse::class, 'call'];
});

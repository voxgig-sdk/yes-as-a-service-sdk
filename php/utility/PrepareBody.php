<?php
declare(strict_types=1);

// YesAsAService SDK utility: prepare_body

class YesAsAServicePrepareBody
{
    public static function call(YesAsAServiceContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

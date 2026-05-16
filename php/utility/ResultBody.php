<?php
declare(strict_types=1);

// YesAsAService SDK utility: result_body

class YesAsAServiceResultBody
{
    public static function call(YesAsAServiceContext $ctx): ?YesAsAServiceResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

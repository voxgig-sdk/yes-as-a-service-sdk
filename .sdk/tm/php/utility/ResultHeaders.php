<?php
declare(strict_types=1);

// YesAsAService SDK utility: result_headers

class YesAsAServiceResultHeaders
{
    public static function call(YesAsAServiceContext $ctx): ?YesAsAServiceResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

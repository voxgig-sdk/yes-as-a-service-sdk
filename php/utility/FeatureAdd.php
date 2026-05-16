<?php
declare(strict_types=1);

// YesAsAService SDK utility: feature_add

class YesAsAServiceFeatureAdd
{
    public static function call(YesAsAServiceContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}

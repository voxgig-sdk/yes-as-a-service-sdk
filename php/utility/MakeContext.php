<?php
declare(strict_types=1);

// YesAsAService SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class YesAsAServiceMakeContext
{
    public static function call(array $ctxmap, ?YesAsAServiceContext $basectx): YesAsAServiceContext
    {
        return new YesAsAServiceContext($ctxmap, $basectx);
    }
}

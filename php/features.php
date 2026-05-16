<?php
declare(strict_types=1);

// YesAsAService SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class YesAsAServiceFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new YesAsAServiceBaseFeature();
            case "test":
                return new YesAsAServiceTestFeature();
            default:
                return new YesAsAServiceBaseFeature();
        }
    }
}

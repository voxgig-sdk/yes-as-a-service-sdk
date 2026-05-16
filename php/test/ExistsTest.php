<?php
declare(strict_types=1);

// YesAsAService SDK exists test

require_once __DIR__ . '/../yesasaservice_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = YesAsAServiceSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}

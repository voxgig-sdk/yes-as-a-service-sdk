<?php
declare(strict_types=1);

// YesAsAService SDK configuration

class YesAsAServiceConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "YesAsAService",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://yesno.wtf",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "yes" => [],
                ],
            ],
            "entity" => [
        'yes' => [
          'fields' => [],
          'name' => 'yes',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'GET',
                  'orig' => '/yes',
                  'parts' => [
                    'yes',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return YesAsAServiceFeatures::make_feature($name);
    }
}

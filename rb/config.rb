# YesAsAService SDK configuration

module YesAsAServiceConfig
  def self.make_config
    {
      "main" => {
        "name" => "YesAsAService",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://yesno.wtf",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "yes" => {},
        },
      },
      "entity" => {
        "yes" => {
          "fields" => [],
          "name" => "yes",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "method" => "GET",
                  "orig" => "/yes",
                  "parts" => [
                    "yes",
                  ],
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "args" => {},
                  "select" => {},
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    YesAsAServiceFeatures.make_feature(name)
  end
end

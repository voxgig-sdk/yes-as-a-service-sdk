# YesAsAService SDK configuration


def make_config():
    return {
        "main": {
            "name": "YesAsAService",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://yesno.wtf",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "yes": {},
            },
        },
        "entity": {
      "yes": {
        "fields": [],
        "name": "yes",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/yes",
                "parts": [
                  "yes",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

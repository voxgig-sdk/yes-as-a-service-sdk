# YesAsAService SDK

Get a random yes, no, or maybe answer paired with a reaction GIF

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About FastAPI

[YesNo](https://yesno.wtf) is a tiny public API that answers a single question: yes, no, or (rarely) maybe. Each response also includes a reaction GIF, making it a popular pick for tutorials, demos, and quick decision toys. The service is run by Mo, Martin, and Michi.

What you get from the API:

- A single endpoint, `GET /api`, returning JSON with an `answer`, a `forced` flag, and an `image` URL pointing to an animated GIF on `yesno.wtf/assets/...`
- An optional `force` query parameter accepting `yes`, `no`, or `maybe` to pin the answer for testing or scripted demos
- A built-in surprise: roughly one response in every ten thousand comes back as `maybe`

The service is unauthenticated and intended for casual use. No API key, no account, no documented rate limits — just a `GET` against `https://yesno.wtf/api`.

## Try it

**TypeScript**
```bash
npm install yes-as-a-service
```

**Python**
```bash
pip install yes-as-a-service-sdk
```

**PHP**
```bash
composer require voxgig/yes-as-a-service-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/yes-as-a-service-sdk/go
```

**Ruby**
```bash
gem install yes-as-a-service-sdk
```

**Lua**
```bash
luarocks install yes-as-a-service-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { YesAsAServiceSDK } from 'yes-as-a-service'

const client = new YesAsAServiceSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o yes-as-a-service-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "yes-as-a-service": {
      "command": "/abs/path/to/yes-as-a-service-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Yes** | The single answer resource exposed by the API, served from `GET /api` and returning a yes/no/maybe verdict together with a matching GIF URL. | `/yes` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from yesasaservice_sdk import YesAsAServiceSDK

client = YesAsAServiceSDK({})


# Load a specific yes
yes, err = client.Yes(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'yesasaservice_sdk.php';

$client = new YesAsAServiceSDK([]);


// Load a specific yes
[$yes, $err] = $client->Yes(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/yes-as-a-service-sdk/go"

client := sdk.NewYesAsAServiceSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "YesAsAService_sdk"

client = YesAsAServiceSDK.new({})


# Load a specific yes
yes, err = client.Yes(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("yes-as-a-service_sdk")

local client = sdk.new({})


-- Load a specific yes
local yes, err = client:Yes(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = YesAsAServiceSDK.test()
const result = await client.Yes().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = YesAsAServiceSDK.test(None, None)
result, err = client.Yes(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = YesAsAServiceSDK::test(null, null);
[$result, $err] = $client->Yes(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Yes(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = YesAsAServiceSDK.test(nil, nil)
result, err = client.Yes(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Yes(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the FastAPI

- Upstream: [https://yesno.wtf](https://yesno.wtf)
- API docs: [https://yesno.wtf/api](https://yesno.wtf/api)

- The API does not publish an explicit licence on its homepage
- GIF assets are hosted by yesno.wtf; treat them as the operators' content and credit the source when reusing
- Not affiliated with Voxgig; this SDK is a generated client over the public endpoint

---

Generated from the FastAPI OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

package voxgigyesasaservicesdk

import (
	"github.com/voxgig-sdk/yes-as-a-service-sdk/go/core"
	"github.com/voxgig-sdk/yes-as-a-service-sdk/go/entity"
	"github.com/voxgig-sdk/yes-as-a-service-sdk/go/feature"
	_ "github.com/voxgig-sdk/yes-as-a-service-sdk/go/utility"
)

// Type aliases preserve external API.
type YesAsAServiceSDK = core.YesAsAServiceSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type YesAsAServiceEntity = core.YesAsAServiceEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type YesAsAServiceError = core.YesAsAServiceError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewYesEntityFunc = func(client *core.YesAsAServiceSDK, entopts map[string]any) core.YesAsAServiceEntity {
		return entity.NewYesEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewYesAsAServiceSDK = core.NewYesAsAServiceSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewYesAsAServiceSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *YesAsAServiceSDK  { return NewYesAsAServiceSDK(nil) }
func Test() *YesAsAServiceSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

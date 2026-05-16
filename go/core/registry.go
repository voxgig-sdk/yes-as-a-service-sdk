package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewYesEntityFunc func(client *YesAsAServiceSDK, entopts map[string]any) YesAsAServiceEntity


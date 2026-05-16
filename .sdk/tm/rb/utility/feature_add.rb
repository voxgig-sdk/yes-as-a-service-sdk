# YesAsAService SDK utility: feature_add
module YesAsAServiceUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end

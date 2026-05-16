# YesAsAService SDK feature factory

from feature.base_feature import YesAsAServiceBaseFeature
from feature.test_feature import YesAsAServiceTestFeature


def _make_feature(name):
    features = {
        "base": lambda: YesAsAServiceBaseFeature(),
        "test": lambda: YesAsAServiceTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

# ProjectName SDK exists test

import pytest
from yesasaservice_sdk import YesAsAServiceSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = YesAsAServiceSDK.test(None, None)
        assert testsdk is not None

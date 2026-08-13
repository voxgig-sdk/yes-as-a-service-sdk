# YesAsAService SDK utility: make_context

from yesasaservice_sdk.core.context import YesAsAServiceContext


def make_context_util(ctxmap, basectx):
    return YesAsAServiceContext(ctxmap, basectx)

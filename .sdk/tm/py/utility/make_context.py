# YesAsAService SDK utility: make_context

from core.context import YesAsAServiceContext


def make_context_util(ctxmap, basectx):
    return YesAsAServiceContext(ctxmap, basectx)

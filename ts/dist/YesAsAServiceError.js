"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YesAsAServiceError = void 0;
class YesAsAServiceError extends Error {
    isYesAsAServiceError = true;
    sdk = 'YesAsAService';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.YesAsAServiceError = YesAsAServiceError;
//# sourceMappingURL=YesAsAServiceError.js.map
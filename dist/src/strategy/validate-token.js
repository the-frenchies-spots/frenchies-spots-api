"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const validateToken = async (req, payload) => {
    const refreshToken = req?.get('authorization')?.replace('Bearer ', '').trim();
    return { ...payload, refreshToken: refreshToken || null };
};
exports.validateToken = validateToken;
//# sourceMappingURL=validate-token.js.map
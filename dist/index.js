"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const svg_1 = __importDefault(require("./resources/svg"));
const PORT = process.env.PORT || '5000';
const api = (0, express_1.default)();
api.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization');
    next();
});
api.get("/", (req, res) => res.setHeader('content-type', 'image/svg+xml').status(200).send((0, svg_1.default)(req)));
api.listen(PORT, () => console.log(`Running on port: http://localhost:${PORT}`));
exports.default = api;
//# sourceMappingURL=index.js.map
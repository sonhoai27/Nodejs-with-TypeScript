"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const version_1_1 = __importDefault(require("./v1/version_1"));
class Index {
    constructor(app) {
        this.app = app;
        this.init();
    }
    init() {
        new version_1_1.default({
            version: "/api/v1",
            app: this.app
        });
    }
}
exports.default = Index;
//# sourceMappingURL=index.api.js.map
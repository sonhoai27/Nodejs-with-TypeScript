"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_route_1 = __importDefault(require("./routes/auth.route"));
class Version_1 {
    constructor(localVar) {
        this.version = localVar.version;
        this.app = localVar.app;
        this.initRouter();
    }
    initRouter() {
        this.app.use(`${this.version}/auth`, auth_route_1.default);
    }
}
exports.default = Version_1;
//# sourceMappingURL=version_1.js.map
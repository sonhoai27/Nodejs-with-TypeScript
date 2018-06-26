"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Auth {
    constructor() {
        this.router = express_1.default.Router();
        this.mountRoute();
    }
    mountRoute() {
        this.router.get("/", (req, res, next) => {
            res.send("Say hello Nodejs With TypeScript");
        });
    }
}
exports.default = new Auth().router;
//# sourceMappingURL=auth.route.js.map
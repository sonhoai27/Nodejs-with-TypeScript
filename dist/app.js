"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor() {
        this.app = express_1.default();
        this.init();
        this.mountRoute();
    }
    init() {
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            if (req.method === "OPTIONS") {
                res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
                return res.status(200).json({});
            }
            next();
        });
        this.app.use((req, res, next) => {
            const error = new Error("Not found");
            error.status = 404;
            next(error);
        });
        this.app.use((error, req, res, next) => {
            res.status(error.status || 500);
            res.json({
                error: {
                    message: error.message,
                    path: req.headers
                }
            });
        });
    }
    mountRoute() {
        const router = express_1.default.Router();
        router.get("/", (req, res, next) => {
            res.send("Hello");
        });
        this.app.use("/", router);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map
import express from 'express'
import bodyParser from "body-parser"
class App {
    public app:any

    constructor(){
        this.app = express()
        this.init()
        this.mountRoute()
    }

    private init(){
        this.app.use(bodyParser.urlencoded({extended: false}))
        this.app.use(bodyParser.json())

        this.app.use((req:any, res:any, next:any) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            );
            if (req.method === "OPTIONS") {
                res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
                return res.status(200).json({

                });
            }
            next();
        });

        this.app.use((req:any, res:any, next:any) => {
            const error:any = new Error("Not found");
            error.status = 404;
            next(error);
        });

        this.app.use((error:any, req:any, res:any, next:any) => {
            res.status(error.status || 500);
            res.json({
            error: {
                message: error.message,
                path: req.headers
            }
            });
        });
    }
    private mountRoute(){
        const router = express.Router()
        router.get("/", (req, res, next)=> {
            res.send("Hello")
        })
        this.app.use("/", router)
    }
}

export default new App().app
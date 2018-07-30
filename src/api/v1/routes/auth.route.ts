import express, { Router } from "express"
class Auth {
    public router:Router;
    constructor(){
        this.router = express.Router()
        this.mountRoute()
    }
    mountRoute(){
        this.router.get("/", (req, res,next)=> {
            res.send("Say hello Nodejs With TypeScript!")
        })
    }
}

export default new Auth().router
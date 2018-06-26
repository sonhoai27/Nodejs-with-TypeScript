import auth from "./routes/auth.route"
interface localVariavle{
    version:String,
    app:any
}
export default class Version_1 {
    private version:String
    private app:any
    constructor(localVar: localVariavle){
        this.version = localVar.version
        this.app = localVar.app
        this.initRouter()
    }

    private initRouter (){
        this.app.use(`${this.version}/auth`, auth)
    }
}
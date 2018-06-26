import Version_1 from "./v1/version_1"
export default class Index {
    private app:any
    constructor(app:any){
        this.app = app
        this.init()
    }
    private init(){
       new Version_1({
           version:"/api/v1",
           app:this.app
        })
    }
}
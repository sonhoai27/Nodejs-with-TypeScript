import * as http from "http"
import app from "./app"

const port = process.env.PORT || 4000;

const server:any = http.createServer(app);

server.listen(port, function() {
    console.log("Server started with port: ", server.address().port)
});
  
  export default server;
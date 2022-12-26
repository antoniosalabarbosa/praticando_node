import cors from "cors";
import App from "./modules/App";
import Router from "./Router";

const app = new App;
const server = app.server;

server.use(cors());
server.use(app.exp.json());
server.use(app.exp.urlencoded());
server.use(Router);
server.listen(3001, ()=>{
    console.log("Servidor Rodando");
});
import cors from "cors";
import App from "./modules/App";
import Router from "./Router";

const app = new App;
const server = app.server;
const corsOptions = {
    origin: 'https://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

server.use(Router);

server.listen(3001, ()=>{
    console.log("Servidor Rodando");
});
import express, { Router } from "express";

class App{
    public server: express.Application;
    public router: express.Router

    constructor(){
        this.server = express();
        this.router = Router();
    }
}

export default App;
import express, { Router } from "express";

class App{
    public exp: typeof express;
    public server: express.Application;
    public router: express.Router

    constructor(){
        this.exp = express;
        this.server = this.exp();
        this.router = Router();
    }
}

export default App;
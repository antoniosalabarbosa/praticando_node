import App from "./modules/App";
import Dao from "./database/Dao";

const Router = (new App).router;
const controller = new Dao;

Router.get("/", (req, res, next)=>{
    res.status(200).send("Raíz");
    next();
});

Router.get("/getAll", (req, res)=>{
    if(controller.dao && controller.dao.conn){
        let sql = `SELECT * FROM pessoas`;
        controller.dao.conn.query(sql, (err, result)=>{
            if(err){
                throw err;
            } else {
                res.status(200).send(result);
                return result;
            };
        });
    }
});

export default Router;
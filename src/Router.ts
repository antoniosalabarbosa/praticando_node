import App from "./modules/App";
import Dao from "./database/Dao";
import { pessoasBody } from "./modules/types";

const app = new App;

const Router = app.router;
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
                return JSON.stringify(result);
            };
        });
    }
});

Router.post("/postNew", (req, res)=>{
    if(controller.dao && controller.dao.conn){
        let data: pessoasBody = {
            id: req.body.id,
            nome: req.body.nome,
            idade: req.body.idade,
        };

        let sql = `INSERT INTO \`pessoas\`(\`id_pes\`, \`nome_pes\`, \`idade_pes\`) VALUES ('${data.id}', '${data.nome}', ${data.idade})`;

        controller.dao.conn.query(sql, (err)=>{
            if(err) {
                console.log("Registro NÃO concluído");
                throw err;
            } else{
                console.log("Registro concluído");
            };
        });
    };
});

export default Router;
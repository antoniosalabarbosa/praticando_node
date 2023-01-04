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

Router.put("/editElement", (req, res)=>{
    if(controller.dao && controller.dao.conn){
        let data: pessoasBody = {
            id: req.body.id,
            nome: req.body.nome,
            idade: req.body.idade
        };

        let sql = `UPDATE \`pessoas\` SET \`nome_pes\`='${data.nome}',\`idade_pes\`='${data.idade}' WHERE \`id_pes\`=${data.id}`;

        controller.dao.conn.query(sql, (err)=>{
            if(err){
                throw err;

            }else{
                console.log("Alteração concluída!")
                console.log(data);
            }
        });
    }
});

Router.delete("/deleteElement", (req, res)=>{
    if(controller.dao && controller.dao.conn){
        let data: pessoasBody = {
            id: req.body.id,
            nome: req.body.nome,
            idade: req.body.idade
        };
        
        let sql = `DELETE FROM \`pessoas\` WHERE id_pes=${data.id}`;

        controller.dao.conn.query(sql, (err)=>{
            if(err){
                throw err;
            } else {
                console.log("Registro deletado!!")
            }
        });
    }
});

export default Router;
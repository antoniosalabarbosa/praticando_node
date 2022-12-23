import Connection from "./Connection";

class Dao{
    public dao: Connection | undefined;

    constructor(){
        try{
            this.dao = new Connection('localhost', 'root', '', 'node_db');
            this.dao.conn?.connect((err)=>{
                if(err) {
                    throw err;
                }
            });
            
        }catch (error){
            console.log("Erro no Dao");
        }
    }
}

export default Dao;
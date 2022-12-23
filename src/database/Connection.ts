import mysql from "mysql";

class Connection {
    private _host: string;
    private _user: string;
    private _pass: string;
    private _db: string;

    public conn; // mudar

    constructor(host: string, user: string, pass: string, db: string) {

        this._host = host;
        this._user = user;
        this._pass = pass;
        this._db = db;

        try {
            this.conn = mysql.createConnection({
                host: this._host,
                user: this._user,
                password: this._pass,
                database: this._db,
            });

            console.log("Conexão com banco de Dados Concluída!");

        } catch (error) {
            console.log("Banco de Dados não conectado!");
        }
    }
}

export default Connection;
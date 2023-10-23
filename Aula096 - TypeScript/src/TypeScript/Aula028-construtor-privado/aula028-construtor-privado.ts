// Singleton - Gang of Four (GoF) | Factory Method - GoF
export class Database {
  private static database: Database;
  private constructor(
    // Se deixar private, não tem acesso fora da classe
    private host: string,
    private usuario: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.usuario}, ${this.password}`);
  }

  static getDatabase(host: string, usuario: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instância já criada');
      return Database.database;
    }
    console.log('Criando nova instância');
    Database.database = new Database(host, usuario, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'host', '123456'); // Só essa que retorna "criando nova instância" os restos dos dbs retorna "Retornando instância já criada"
db1.connect();
const db2 = Database.getDatabase('localhost', 'host', '123456');
db2.connect();
const db3 = Database.getDatabase('localhost', 'host', '123456');
db3.connect();
const db4 = Database.getDatabase('localhost', 'host', '123456');
db4.connect();

console.log(db1 === db2);

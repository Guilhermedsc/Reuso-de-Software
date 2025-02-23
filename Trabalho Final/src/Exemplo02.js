// Interface comum
class Database {
    conectar() {
        throw new Error("Método conectar() deve ser implementado")
    }
}

// Implementações concretas
class MySQL extends Database {
    conectar() {
        console.log("🔗 Conectando ao MySQL...")
    }
}

class PostgreSQL extends Database {
    conectar() {
        console.log("🔗 Conectando ao PostgreSQL...")
    }
}

class MongoDB extends Database {
    conectar() {
        console.log("🔗 Conectando ao MongoDB...")
    }
}

// Fábricas concretas
class DatabaseFactory {
    static criar(tipo) {
        switch (tipo) {
            case "mysql":
                return new MySQL()
            case "postgresql":
                return new PostgreSQL()
            case "mongodb":
                return new MongoDB()
            default:
                throw new Error("Tipo de banco inválido")
        }
    }
}

// Testando o Factory
const db1 = DatabaseFactory.criar("mysql")
db1.conectar()

const db2 = DatabaseFactory.criar("postgresql")
db2.conectar()

const db3 = DatabaseFactory.criar("mongodb")
db3.conectar()

// Interface comum
class Relatorio {
    gerar(dados) {
        throw new Error("Método gerar() deve ser implementado")
    }
}

// Implementações concretas
class PDFRelatorio extends Relatorio {
    gerar(dados) {
        console.log(`📄 Gerando relatório em PDF com dados: ${JSON.stringify(dados)}`)
    }
}

class CSVRelatorio extends Relatorio {
    gerar(dados) {
        console.log(`📊 Gerando relatório em CSV com dados: ${JSON.stringify(dados)}`)
    }
}

class JSONRelatorio extends Relatorio {
    gerar(dados) {
        console.log(`📜 Gerando relatório em JSON com dados: ${JSON.stringify(dados)}`)
    }
}

// Fábricas concretas
class RelatorioFactory {
    static criar(tipo) {
        switch (tipo) {
            case "pdf":
                return new PDFRelatorio()
            case "csv":
                return new CSVRelatorio()
            case "json":
                return new JSONRelatorio()
            default:
                throw new Error("Tipo de relatório inválido")
        }
    }
}

// Testando o Factory
const dados = { nome: "Empresa X", vendas: 10000 }

const relatorio1 = RelatorioFactory.criar("pdf")
relatorio1.gerar(dados)

const relatorio2 = RelatorioFactory.criar("csv")
relatorio2.gerar(dados)

const relatorio3 = RelatorioFactory.criar("json")
relatorio3.gerar(dados)

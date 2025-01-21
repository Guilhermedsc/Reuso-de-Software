const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = 3000

// Middleware para lidar com JSON
app.use(bodyParser.json())

// Dados simulados
let cursos = [
    { id: 1, titulo: "JavaScript Básico", descricao: "Introdução ao JavaScript", cargaHoraria: 20 },
    { id: 2, titulo: "Node.js Avançado", descricao: "Técnicas avançadas com Node.js", cargaHoraria: 30 },
]

// Listar todos os cursos
app.get("/cursos", (req, res) => {
    res.json(cursos)
})

// Obter detalhes de um curso específico
app.get("/cursos/:id", (req, res) => {
    const curso = cursos.find((c) => c.id === parseInt(req.params.id))
    if (!curso) {
        return res.status(404).json({ mensagem: "Curso não encontrado" })
    }
    res.json(curso)
})

// Criar um novo curso
app.post("/cursos", (req, res) => {
    const { titulo, descricao, cargaHoraria } = req.body
    const novoCurso = {
        id: cursos.length + 1,
        titulo,
        descricao,
        cargaHoraria,
    }
    cursos.push(novoCurso)
    res.status(201).json(novoCurso)
})

// Atualizar um curso existente
app.put("/cursos/:id", (req, res) => {
    const curso = cursos.find((c) => c.id === parseInt(req.params.id))
    if (!curso) {
        return res.status(404).json({ mensagem: "Curso não encontrado" })
    }
    const { titulo, descricao, cargaHoraria } = req.body
    curso.titulo = titulo || curso.titulo
    curso.descricao = descricao || curso.descricao
    curso.cargaHoraria = cargaHoraria || curso.cargaHoraria

    res.json(curso)
})

// Excluir um curso
app.delete("/cursos/:id", (req, res) => {
    const index = cursos.findIndex((c) => c.id === parseInt(req.params.id))
    if (index === -1) {
        return res.status(404).json({ mensagem: "Curso não encontrado" })
    }
    cursos.splice(index, 1)
    res.status(204).send()
})

// Iniciar o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`)
})

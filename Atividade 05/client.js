const axios = require("axios")
const baseURL = "http://localhost:3000/cursos"

// Listar todos os cursos
async function listarCursos() {
    try {
        const response = await axios.get(baseURL)
        console.log("Cursos disponíveis:", response.data)
    } catch (error) {
        console.error(error.message)
    }
}

// Obter detalhes de um curso
async function obterCurso(id) {
    try {
        const response = await axios.get(`${baseURL}/${id}`)
        console.log("Detalhes do curso:", response.data)
    } catch (error) {
        console.error(error.message)
    }
}

// Adicionar um novo curso
async function adicionarCurso(titulo, descricao, cargaHoraria) {
    try {
        const response = await axios.post(baseURL, {
            titulo,
            descricao,
            cargaHoraria,
        })
        console.log("Curso adicionado:", response.data)
    } catch (error) {
        console.error(error.message)
    }
}

// Atualizar um curso existente
async function atualizarCurso(id, titulo, descricao, cargaHoraria) {
    try {
        const response = await axios.put(`${baseURL}/${id}`, {
            titulo,
            descricao,
            cargaHoraria,
        })
        console.log("Curso atualizado:", response.data)
    } catch (error) {
        console.error(error.message)
    }
}

// Excluir um curso
async function excluirCurso(id) {
    try {
        await axios.delete(`${baseURL}/${id}`)
        console.log(`Curso com ID ${id} excluído com sucesso.`)
    } catch (error) {
        console.error(error.message)
    }
}

// Exemplo de uso
;(async () => {
    console.log("Listando cursos:")
    await listarCursos()

    console.log("\nAdicionando curso:")
    await adicionarCurso("React Básico", "Curso de introdução ao React", 25)

    console.log("\nListando cursos novamente:")
    await listarCursos()

    console.log("\nObtendo detalhes do curso ID 1:")
    await obterCurso(1)

    console.log("\nAtualizando curso ID 2:")
    await atualizarCurso(2, "Node.js Intermediário", "Curso atualizado", 35)

    console.log("\nExcluindo curso ID 3:")
    await excluirCurso(3)

    console.log("\nListando cursos após exclusão:")
    await listarCursos()
})()

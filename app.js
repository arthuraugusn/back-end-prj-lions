const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')
const { getAlunos, getAlunosAno, getAlunosStatus, getAlunosAnoStatus, getAlunoMatricula } = require('./modulos/alunos')
const { getCursos } = require('./modulos/cursos')

const app = express()

app.use((request, response, next) =>{
    response.header('Acess-Control-Allow-Origin', '*')

    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())
    next()
})

app.get('/cursos', cors(), async function(request, response, next){
    let escolherCurso = getCursos()
    let cursosCadastradosJSON = {}

    if(escolherCurso){
        cursosCadastradosJSON.cursos = escolherCurso
        response.status(200),
        response.json(cursosCadastradosJSON)
    }else{
        response.status(404)
    }
})

app.get('/alunos/:abreviacaoCurso', cors(), async function(request, response, next){
    let sigla = request.params.abreviacaoCurso
    let buscarAlunosCursoJSON = {}
    let buscaAlunos = getAlunos(sigla)

    if(buscaAlunos){
        buscarAlunosCursoJSON.alunosCadastrados = buscaAlunos
        response.status(200),
        response.json(buscarAlunosCursoJSON)
    }else{
        response.status(404)
        next()
    }
})

app.get('/estudantes/:siglaCurso/:statusMatricula', cors(), async function(request, response, next){
    let siglaCurso = request.params.siglaCurso
    let statusAluno = request.params.statusMatricula
    let buscarAlunosStatusMatriculaJSON = {}
    let buscarAlunos = getAlunosStatus(siglaCurso, statusAluno)

    if(buscarAlunos){
        buscarAlunosStatusMatriculaJSON.alunosStatus = buscarAlunos
        response.status(200),
        response.json(buscarAlunosStatusMatriculaJSON)
    }else{
        response.status(404)
        next()
    }
})

app.get('/aprendizes/:anoConclusao/:abreviaturaCurso', cors(), async function(request, response, next){
    let sigla = request.params.abreviaturaCurso
    let ano = request.params.anoConclusao
    let buscarAlunosAnoConclusaoJSON = {}
    let buscarAlunos = getAlunosAno(sigla,ano)

    if(buscarAlunos){
        buscarAlunosAnoConclusaoJSON.alunosAno = buscarAlunos
        response.status(200),
        response.json(buscarAlunosAnoConclusaoJSON)
    }
    else{
        response.status(404)
        next()
    }
})

app.get('/academico/:sinal/:condicaoAcademica/:anoFechamento', cors(), async function(request, response, next){
    let sigla = request.params.sinal
    let anoConclusao = request.params.anoFechamento
    let statusAluno = request.params.condicaoAcademica
    let buscaAlunos = getAlunosAnoStatus(sigla,statusAluno, anoConclusao)
    let buscaAlunosStatusAnoJSON = {}

    if(buscaAlunos){
        buscaAlunosStatusAnoJSON.alunosAnoStatus = buscaAlunos
        response.status(200),
        response.json(buscaAlunosStatusAnoJSON)
    }else{
        response.status(404)
        next()
    }
})

app.get('/discente/:numeroMatricula/:abreviaCurso', cors(), async function(request,response, next){
    let siglaCurso = request.params.abreviaCurso
    let matriculaAluno = request.params.numeroMatricula
    let buscarAluno = getAlunoMatricula(matriculaAluno, siglaCurso)
    let buscarAlunoNumeroMatriculaJSON = {}

    if(buscarAluno){
        buscarAlunoNumeroMatriculaJSON.alunoMatricula = buscarAluno
        response.status(200),
        response.json(buscarAlunoNumeroMatriculaJSON)
    }else{
        response.status(404)
        next()
    }
})

app.listen(3030, function(){
    console.log(`Waiting`)
})
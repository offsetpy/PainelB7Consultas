const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Dados = require('./src/models/Dados.js')
const cors =require('cors')
app.use(express.json())
app.use(cors())
app.get('/consulta', async (req, res)=>{
    res.header('Access-Control-Allow-Origin', '*');

    const { nome, cpf } = req.query;        
      
    let query = {};
      
    if (nome) {
        query.nome = nome;
    }
      
    if (cpf) {
        query.cpf = cpf;
    }

    try{
        const dados = await Dados.findOne(query)
        res.status(200).json(dados)
    } catch (error){
        res.status(500).json({msg: error})
    }
})

app.post('/register', async (req, res)=>{
    try{
        const dadosRegistro = await Dados.create(req.body)
        res.status(200).json({ dadosRegistro })
    } catch (error){
        res.status(400).json({ error })
    }
})

// Conexão ao banco de dados
mongoose.connect('mongodb+srv://gabrxdev:6JIEPA4ffmki6zHv@cluster0.oam58ul.mongodb.net/api-consulta').then(()=>{
    console.log('conectado ao banco de dados')    
    app.listen(3000, ()=>{
        console.log('rodando na porta 300')
    })
}).catch((error)=>{
    console.log('erro ao conectar ao banco de dados', error)
})

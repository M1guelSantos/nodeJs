const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("Ola Mundo!");
}); //Nome da rota, o que a rota faz!

app.get("/blog/:artigo?", function(req,res){ // Parâmetros Opcionais

    var artigo = req.params.artigo;

    if(artigo){
        res.send(" <h2> Artigo: " + artigo + "</h2>")
    }else{
        res.send("Bem vindo ao meu blog");
    }

});

app.get("/perfil", function(req,res){
;
    var perfil = req.query["perfil"];

    if(perfil){
        res.send(perfil);
    }else{
        res.send("Nada foi declarado")
    }

    
});

app.get("/ola/:nome/:jogo", function(req, res){
    var nome = req.params.nome
    var jogo = req.params.jogo
    res.send("<h1> Olá " + nome + " do " + jogo + " </h1> ")
});

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor Iniciado com sucesso")
    }
})

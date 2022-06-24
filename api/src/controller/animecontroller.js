import { Router } from "express";
import { consultarAnime, inserirAnime } from "../repository/animerepository.js";
const server= Router();

server.post('/anime', async (req,resp) => {
    const nome = req.body;
    const resposta = await inserirAnime(nome);

    resp.send({
        x:resposta
    })
})

server.get('/animes', async (req,resp) =>{
    const resposta = await consultarAnime();
    resp.send(resposta);
})

export default server
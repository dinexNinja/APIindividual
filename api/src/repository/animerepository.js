import { con } from './connection.js';

export async function inserirAnime(nome){
    const comando = `
    insert into tb_anime(nm_anime)
				    values(?)`;
    
    const [resposta] = await con.query(comando, [nome.nome]);

    return resposta.affectedRows
}

export async function consultarAnime(){
    const comando = 
    `select * from tb_anime`;
    const [resposta] = await con.query(comando);

    return resposta
}
import 'dotenv/config';
import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

//não esquecer de importar os controller macaquitooo!!!
import animeController from "./controller/animecontroller.js"

server.use(animeController);

server.listen(process.env.PORT,() => console.log(`API online na porta ${process.env.PORT}`))
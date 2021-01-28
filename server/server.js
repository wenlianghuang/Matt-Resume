import express  from 'express';
import path from 'path';
import dotenv_defaults from 'dotenv-defaults';
import {GraphQLServer} from 'graphql-yoga'; 
import Query from './resolvers/Query.js';
import Mutation from './resolvers/Mutation.js';
import {createWriteStream} from 'fs';
const app = express();

const port = process.env.PORT || 5000;

const server = new GraphQLServer({
    typeDefs: "./schema.graphql",
    resolvers: {
        Query,
        Mutation
    }
})

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
server.express.use(express.static(buildPath));
server.express.get("*",(req,res)=>{
    res.sendFile(path.join(buildPath,'index.html'))})
server.start({port: port},()=>{
    console.log(`The server is port ${port}`);
})
//import {createWriteStream,createReadStream} from 'fs';
import fs from 'fs';
import path from 'path';
import storeUpload from '../storeUpload.js';
const Mutation = {
    uploadFile: async (parent, { file }) => {
        //const { stream, filename } = await file;
        
        /*const __dirname = path.resolve(path.dirname(''));
        const pathName = path.join(__dirname,`/public/images/${filename}`)
        console.log("Path name: ",pathName);*/
        
        const { createReadStream, filename, mimetype,encoding } = await file;
        console.log('filename: ',filename);
        const stream = createReadStream();
        //await storeUpload({ stream, filename });
        await stream.pipe(fs.createWriteStream(filename))
        //return true;
        return {
            url: `http://localhost:4000/images/${filename}`
        }
    }
}

export default Mutation;
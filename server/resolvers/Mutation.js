import {createWriteStream,createReadStream} from 'fs';
import storeUpload from '../storeUpload.js';
const Mutation = {
    uploadFile: async (parent, { file }) => {
        //const { stream, filename } = await file;
        const { createReadStream, filename, mimetype } = await file;
        const stream = createReadStream();
        await storeUpload({ stream, filename });
        return true;
    }
}

export default Mutation;
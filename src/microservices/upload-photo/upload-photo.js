import { diskStorage } from "multer";
import path from 'path';
import { v4 as uuid } from "uuid"; 

var storage = diskStorage({
    destination: path.join(__dirname, '../../tmp'),
    filename: (req, file, cb) => {
        cb(null, "IMAGE-" + uuid() + path.extname(file.originalname))
    }
});

export default storage;
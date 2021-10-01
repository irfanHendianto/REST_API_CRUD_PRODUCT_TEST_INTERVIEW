const multer = require('multer');
const path = require('path');

module.exports = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb)=>{
        cb(null, 'uploads');
      },
      filename: (req, file, cb) =>{
        cb(null, new Date().getTime() + '-' + file.originalname);
      }
    }),
    fileFilter: (req, file, cb) => {
      let ext = path.extname(file.originalname);  
      if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
        cb(new Error("File type is not supported"), false);
        return;
      }
      cb(null, true);
    },
  });
import multer from "multer";

const storage = multer.diskStorage({ // multer is used to handle multipart/form-data, which is primarily used for uploading files.
    destination: function (req, file, cb) { // destination is the directory where the uploaded file will be stored.
      cb(null, "./public/temp") // "./public/temp" is the directory where the uploaded file will be stored.
    },
    filename: function (req, file, cb) { // filename is the name of the file that will be stored.
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({
    storage, 
})
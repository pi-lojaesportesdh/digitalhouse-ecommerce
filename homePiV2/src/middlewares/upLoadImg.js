const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = {
    storage: multer.diskStorage({
        dest: (req, file, cb) => {
            cb(null, path.resolve(__dirname, "..", "..","..", "images", "uploads"));
        },
        filename: (req, file, cb) =>{
            crypto.randomBytes(16, (err, hash)=>{
                if (err) cb(err);
                const fileName = `${hash.toString(hex)}-${imgProduct.originalname}`;
                cb(null, fileName);
            })
        }
    }),
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) =>{
        const allowedMimes = [
            "image/jpeg",
            "image/png",
            "image/jpg"
        ];
        if (allowedMimes.includes(imgProduct.mimetype)){
            cb(null, true);
        }else {
            cb(new Error('Invalid file type'))
        }
    }
};
const multer = require("multer");
const uuid = require("uuid")

const storage = multer.diskStorage({
    destination(req, file = {}, cb){
        cb(null, "uploads")
    },
    filename(req, file = {}, cb){
        const { originalname } = file;

        const originalnameSplit = originalname.split(".");
        const fileExt = originalnameSplit[1];

        cb(null, uuid.v4 + "." + fileExt);
    }
})

module.exports = multer({storage});
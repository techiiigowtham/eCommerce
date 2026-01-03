const cloudinary = require('cloudinary').v2;
const multer = require('multer')



cloudinary.config({
    cloud_name: 'dsczviovd',
    api_key : '213979836276431',
    api_secret : 'ABO7rte2klyoBkPV5XmvMpmGtiQ'
});


const storage = new multer.memoryStorage();

async function ImageUploadUtil(){
    const result = await cloudinary.uploader.upload(file, {
        resource_type : 'auto'
    });

    return result
}

const upload = multer({storage});


module.exports = {upload, ImageUploadUtil}
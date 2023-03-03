const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const cloudinaryImageUpload = (file, folder, public_id, tag) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(file, {
        folder,
        public_id,
      })
      .then((result) => {
        cloudinary.uploader
          .add_tag(tag, [`${result.public_id}`])
          .then((res) => resolve(res.public_ids[0]))
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  });
};

module.exports = {
  cloudinaryImageUpload,
};

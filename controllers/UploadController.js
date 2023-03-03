const { cloudinaryImageUpload } = require("../config/cloudinary");

const pictureUpload = async (req, res) => {
  if (req.files !== undefined) {
    const { folder, tag } = req.fields;
    try {
      let rawPics = req.files["pictures[]"];
      let clodinaryPics = [];

      for (let i = 0; i < rawPics.length; i++) {
        const { name } = rawPics[i];
        clodinaryPics[i] = await cloudinaryImageUpload(
          rawPics[i].path,
          folder,
          name.split(".")[0],
          tag
        );
      }
      res.status(200).json({
        sucess: true,
        pictures: clodinaryPics,
      });
    } catch (error) {
      res.status(400).json({
        sucess: false,
        error,
      });
    }
  } else {
    res.status(400).json({
      sucess: false,
      error: "No image was uploaded",
    });
  }
};

module.exports = {
  pictureUpload,
};

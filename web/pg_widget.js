const cloudName = ; // input your Clodinary CloudName here

const myGallery = cloudinary.galleryWidget({
  container: "#my-gallery",
  cloudName: cloudName,
  mediaAssets: [{ tag: "touch", mediaType: "spin" }],
});

myGallery.render();

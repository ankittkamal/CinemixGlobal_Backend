const express = require("express");
const { uploadTrailer } = require("../controllers/movie");
const { isAuth, isAdmin } = require("../middlewares/auth");
const { uploadVideo, uploadImage } = require("../middlewares/multer");
const { createMovie } = require("../controllers/movie");
const { validate, validateMovie } = require("../middlewares/validator");
const { parseData } = require("../utils/helper");
const { updateMovieWithoutPoster } = require("../controllers/movie");
const { updateMovieWithPoster } = require("../controllers/movie");
const { removeMovie } = require("../controllers/movie");
const router = express.Router();

router.post(
  "/upload-trailer",
  isAuth,
  isAdmin,
  uploadVideo.single("video"),
  uploadTrailer
);

router.post(
  "/create",
  isAuth,
  isAdmin,
  uploadImage.single("poster"),
  parseData,
  //   validateMovie,
  //   validate,
  createMovie
);
router.patch(
  "/update-movie-without-poster/:movieId",
  isAuth,
  isAdmin,
  // parseData,
  validateMovie,
  validate,
  updateMovieWithoutPoster
);
router.patch(
  "/update-movie-with-poster/:movieId",
  isAuth,
  isAdmin,
  uploadImage.single("poster"),
  parseData,
  validateMovie,
  validate,
  updateMovieWithPoster
);

router.delete("/:movieId", isAuth, isAdmin, removeMovie);

module.exports = router;

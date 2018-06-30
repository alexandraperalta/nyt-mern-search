const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.route("/")
    .post(articleController.create);

// Matches with "/api/articles/saved"
router.route("/saved")
  .get(articleController.findAll)
  

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(articleController.remove);

module.exports = router;

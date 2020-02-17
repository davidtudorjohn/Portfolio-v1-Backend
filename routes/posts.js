const router = require("express").Router();
const verify = require("./verifyToken");
router.get("/", verify, (req, res) => {
  res.json({
    protectedJSON: {
      message: "This message is for users only."
    }
  });
});

module.exports = router;

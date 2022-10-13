const router = require("express").Router();
const verify = require("./verifyToken");
//authorising the access
router.get("/signin", verify, (req, res) => {
  res.send(req.user);
});

module.exports = router;

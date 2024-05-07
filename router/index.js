const router = require("express").Router()

const {index} = require('../constroller/indexController.js')

router.get("/:word",index)

module.exports = router;
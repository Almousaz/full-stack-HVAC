const express = require("express");
const router = express.Router();
const controller = require('../controllers/controllers')



router.post("/schedule_service", controller.schedulerService);

router.post("/request_quote", controller.requestQuote);

module.exports = router;

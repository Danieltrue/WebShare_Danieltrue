const express = require("express");
const router = express.Router();
const { downloadPdf, generateUrl, redirectLink } = require("./Controller/Main");
//Router

router.route("/download/pdf").get(downloadPdf);
router.route("/generateLink").post(generateUrl);
router.route("/:link").get(redirectLink);

module.exports = router;

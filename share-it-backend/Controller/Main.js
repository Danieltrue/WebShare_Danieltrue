const path = require("path");
const shorturl = require("../model/Short.js");

//@Desc GET download the pdf
//@Access Public
//@Route /download/pdf
exports.downloadPdf = async (req, res, next) => {
  try {
    let pdfPath = path.join(__dirname, "./../doc/i-am-malala.pdf");

    return await res.download(pdfPath);
  } catch (err) {}
};
//@Desc POST Generate Url
//@Access Public
//@Route /shorturl
exports.generateUrl = async (req, res, next) => {
  try {
    const shortlink = await shorturl.create({ fullurl: req.body.link });

    return await res.status(200).send(shortlink.short);
  } catch (err) {}
};
//@Desc GET Generate Url
//@Access Public
//@Route /shorturl
exports.redirectLink = async (req, res, next) => {
  console.log(req.params.link);
  try {
    const shortlink = await shorturl.findOne({ short: req.params.link });

    if (!shortlink) return await res.redirect("/error");

    return await res.redirect(shortlink.fullurl);
  } catch (err) {}
};

var express = require('express');
var router = express.Router();
const UrlModel = require('../api/urls/models/UrlModel');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


/* redirect user to long url */
router.get('/:code', async (req, res) => {
    const {code} = req.params
    try {
        const url = await UrlModel.findOne({
            urlCode: code
        })
        if (url) {
            return res.redirect(url.longUrl)
        } else {
            return res.status(404).json('No URL Found')
        }
    } catch (err) {
        console.error(err)
        res.status(500).json('Server Error')
    }
})

module.exports = router;

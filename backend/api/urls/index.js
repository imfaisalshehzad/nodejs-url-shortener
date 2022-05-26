const router = require('express').Router();
const validator = require('validator');
const shortId = require('shortid');
const { lookup } = require('geoip-lite');
const makeExpressCallback = require('../../utils/express-callback');
const { BadRequestError } = require('../../utils/api-errors');
const { validUrl } = require('../../utils/helper');

const UrlModel = require('./models/UrlModel');
const UrlGeoModel = require('./models/UrlGeoModel');
const controller = require('./controller/UrlController');

const {
    doEncodeUrlService,
    doDecodeUrlService,
    doUrlStatsService,
} = require('./service/UrlService');


const encodeUrlIndex = controller.encodeUrlController({
    UrlModel,
    validator,
    shortId,
    doEncodeUrlService,
    BadRequestError,
});

const decodeUrlIndex = controller.decodeUrlController({
    UrlModel,
    UrlGeoModel,
    lookup,
    doDecodeUrlService,
    BadRequestError,
});

const urlStatsIndex = controller.urlStatsController({
    UrlModel,
    UrlGeoModel,
    doUrlStatsService,
    BadRequestError,
});

// routes
const UrlController = {
    encodeUrlIndex,
    decodeUrlIndex,
    urlStatsIndex,
};


const routes = require('./routes/UrlRoutes')({
    UrlController,
    router,
    makeExpressCallback,
});

module.exports = {
    UrlController,
    UrlService: {
        doEncodeUrlService,
        doDecodeUrlService,
        doUrlStatsService,
    },
    UrlAPIRoutes: routes,
};

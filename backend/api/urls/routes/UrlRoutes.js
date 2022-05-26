module.exports = ({ UrlController, router, makeExpressCallback }) => {
    router.post('/encode', makeExpressCallback(UrlController.encodeUrlIndex));
    router.post('/decode', makeExpressCallback(UrlController.decodeUrlIndex));
    router.get('/statistic/:code', makeExpressCallback(UrlController.urlStatsIndex));

    return router;
};

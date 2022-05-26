const { UrlAPIRoutes } = require('../api/urls');

module.exports = function getRoutes(app) {
    app.use('/api/url', UrlAPIRoutes);
};

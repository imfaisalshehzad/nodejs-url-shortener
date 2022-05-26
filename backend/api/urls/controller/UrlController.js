const encodeUrlController = ({
    UrlModel,
    validator,
    shortId,
    doEncodeUrlService,
    BadRequestError,
}) => async (httpRequest) => {
    const baseUrl = `${process.env.SITE_BASE_URL}`;
    const { longUrl } = httpRequest.body;
    const result = await doEncodeUrlService({
        UrlModel,
        validator,
        shortId,
        longUrl,
        baseUrl,
        BadRequestError,
    });

    return {
        statusCode: 200,
        body: {
            success: "ok",
            message: "api response",
            data: result,
        },
    };
}

const decodeUrlController = ({
    UrlModel,
    UrlGeoModel,
    lookup,
    doDecodeUrlService,
    BadRequestError,
}) => async (httpRequest) => {
    const { code } = httpRequest.body;
    const geoAddress = (process.env.NODE_ENV === "development") ? process.env.GEO_IP : httpRequest.remoteAddress;
    const geoLog = lookup(geoAddress);
    const result = await doDecodeUrlService({
        UrlModel,
        UrlGeoModel,
        code,
        geoAddress,
        geoLog,
        BadRequestError,
    });

    return {
        statusCode: 200,
        body: {
            success: "ok",
            message: "api response",
            data: result,
        },
    };
}

const urlStatsController = ({
  UrlModel,
  UrlGeoModel,
  doUrlStatsService,
  BadRequestError,
}) => async (httpRequest) => {
    const { code } = httpRequest.params;
    const result = await doUrlStatsService({
        UrlModel,
        UrlGeoModel,
        code,
        BadRequestError,
    });

    return {
        statusCode: 200,
        body: {
            success: true,
            message: 'Url Stats',
            data: result,
        },
    };
}

module.exports = {
    encodeUrlController,
    decodeUrlController,
    urlStatsController,
};

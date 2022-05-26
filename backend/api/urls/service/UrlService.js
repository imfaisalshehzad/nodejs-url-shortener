const doEncodeUrlService = async ({
    UrlModel,
    validator,
    shortId,
    longUrl,
    baseUrl,
    BadRequestError,
}) => {

    if (!validator.isURL(baseUrl, { require_tld: false })) {
        return new BadRequestError('Invalid Base URL.');
    }

    if (validator.isURL(longUrl, {disallow_auth: true})) {
        const urlCode = shortId.generate();
        try {
            let url = await UrlModel.findOne({
                longUrl
            })
            if (url) {
                return url;
            } else {
                const shortUrl = baseUrl + urlCode
                url = await UrlModel.create({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                return url;
            }
        } catch (err) {
            console.log(err)
            return new BadRequestError(err);
        }
    } else {
        return new BadRequestError('Invalid URL');
    }
};

const doDecodeUrlService = async ({
    UrlModel,
    UrlGeoModel,
    code,
    geoAddress,
    geoLog,
    BadRequestError,
}) => {
    try {
        const url = await UrlModel.findOneAndUpdate(
            { urlCode: `${code}` },
            { $inc: { clicks: 1 } },
            { new: true }
        );
        if (url) {
            await UrlGeoModel.create({
                urlCode: `${code}`,
                ip_address: geoAddress,
                country: geoLog.country,
                region: geoLog.region,
                timezone: geoLog.timezone,
                date: new Date()
            });
            return url;
        } else {
            return new BadRequestError('No URL Found');
        }

    } catch (err) {
        console.error(err)
        return new BadRequestError('Server Error :'+ err);
    }
};

const doUrlStatsService = async ({
    UrlModel,
    UrlGeoModel,
    code,
    BadRequestError,
}) => {
    try {
        const url = await UrlGeoModel.aggregate(
            [
                {$match: {'urlCode': `${code}`}},
                {
                    $group:
                        {
                            _id: "$country",
                            total: {$count: {}}
                        }
                },
                {
                    $addFields: { country: "$_id" }
                },
            ]
        );
        if (url.length > 0) {
            return url;
        } else {
            return new BadRequestError('Code URL Found');
        }

    } catch (err) {
        console.error(err)
        return new BadRequestError('Server Error :' + err);
    }
};
module.exports = {
    doEncodeUrlService,
    doDecodeUrlService,
    doUrlStatsService,
}

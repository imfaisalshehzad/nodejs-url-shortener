export async function encodePostData(req) {
    const row = await fetch('/api/encode', {
        method: 'POST',
        body: JSON.stringify(req),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => response.text())
        .then(result => {
                result = JSON.parse(result)
                return result
            }
        )
        .catch(error => console.log('error', error));

    return row;
}

export async function decodePostData(req) {
    const row = await fetch('/api/decode', {
        method: 'POST',
        body: JSON.stringify(req),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => response.text())
        .then(result => {
                result = JSON.parse(result)
                return result
            }
        )
        .catch(error => console.log('error', error));

    return row;
}

export async function statisticGetData(req) {
    try {
        const row = await fetch('/api/statistic/'+ req, {
            method: 'GET',
        }).then(response => response.text())
            .then(result => {
                    result = JSON.parse(result)
                    return result
                }
            )
            .catch(error => console.log('error', error));
        return row;
    } catch (error) {
        return error
    }

}

export default async function handler(req, res) {
    try {
        const response = await fetch(process.env.ENDPOINT_URL + 'encode/', {
            method: 'POST',
            body: JSON.stringify(req.body),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await response.json()

        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}


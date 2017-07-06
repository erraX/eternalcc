import cbRequest from 'request'

export default function request(options) {
    return new Promise((resolve, reject) => {
        cbRequest(options, (error, response, html) => {
            if (error) {
                reject(error)
            }

            resolve({
                html,
                response,
            })
        })
    })
}

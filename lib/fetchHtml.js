import request from './request'
import iconv from 'iconv-lite'

export default async function fetchHtml(url) {
    try {
        var { response, html } = await request({
            url,
            encoding: null
        })

        html = iconv.decode(html, 'gb2312')
    }
    catch (error) {
        console.log(' ==> ERROR', error)
    }

    return html
}

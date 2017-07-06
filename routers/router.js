import RSS from 'rss'
import Router from 'koa-router'
import fetchHtml from '../lib/fetchHtml'
import cheerio from 'cheerio'

import AiWanRSS from '../lib/RSS/AiWan/AiWanRSS'
import AiWanItem from '../lib/RSS/AiWan/AiWanItem'

const router = Router()
const fetchUrl = 'http://play.163.com/rank/'

router.get('/aiwan', async (ctx, next) => {
    const html = await fetchHtml(fetchUrl)

    const $html = cheerio.load(html, { decodeEntities: false })
    const rss = new AiWanRSS($html, {
        feedOptions: {
            title: 'title222',
            feed_url: 'http://example.com/rss.xml',
            site_url: 'http://example.com'
        },
        ItemType: AiWanItem,
    })

    ctx.type = 'text/xml; charset=utf-8'
    ctx.body = rss.xml(true)
})

export default router

import RSS from 'rss'
import Router from 'koa-router'
import fetchHtml from '../lib/fetchHtml'
import cheerio from 'cheerio'

import AiWanRSS from '../lib/RSS/AiWan/AiWanRSS'
import AiWanItem from '../lib/RSS/AiWan/AiWanItem'

import ErjiRSS from '../lib/RSS/Erji/ErjiRSS'
import ErjiItem from '../lib/RSS/Erji/ErjiItem'

const router = Router()

router.get('/aiwan', async (ctx, next) => {
    const aiwanUrl = 'http://play.163.com/rank/'
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

router.get('/erji', async (ctx, next) => {
    const erjiUrl = 'http://www.erji.net/forum.php?mod=forumdisplay&fid=2'
    const html = await fetchHtml(erjiUrl);

    const $html = cheerio.load(html, { decodeEntities: false })
    const rss = new ErjiRSS($html, {
        feedOptions: {
            title: '耳机大家坛',
            feed_url: 'http://www.erji.net/forum.php',
            site_url: 'http://www.erji.net/forum.php'
        },
        ItemType: ErjiItem,
    })

    ctx.type = 'text/xml; charset=utf-8'
    ctx.body = rss.xml(true)
})

export default router

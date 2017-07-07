import fs from 'fs'
import cbRequest from 'request'
import Koa from 'koa'

import router from './routers/router'

const app = new Koa()

// x-response-time
app.use(async function (ctx, next) {
    const start = new Date()
    await next()
    const ms = new Date() - start
    ctx.set('X-Response-Time', `${ms}ms`)
})

// logger
app.use(async function (ctx, next) {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`[${new Date()}] ${ctx.method} ${ctx.url} - DURATION: ${ms}`)
})

// Using routers
app.use(router.routes())

app.listen(3000)

export default app

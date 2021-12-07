const Koa = require('koa')
const KoaRouter = require('koa-router')

const app = new Koa()
const router = new KoaRouter()

router.get('/', (ctx, next) => {
    ctx.body = 'INDEX SAYFASI'
});

router.get('/about', (ctx, next) => {
    ctx.body = 'HAKKINDA SAYFASI'
});
router.get('/contact', (ctx, next) => {
    ctx.body = 'ILETISIM SAYFASI'
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const port = 3000

app.listen(port, () =>{
    console.log(`Sunucu port ${port} da çalışmaya başladı...`)
})
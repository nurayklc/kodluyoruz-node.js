const Koa = require('koa')
const KoaRouter = require('koa-router')

const app = new Koa()
const router = new KoaRouter()

router.get('/', ctx => {
    ctx.body = '<h1>INDEX SAYFASINA HOSGELDINIZ</h1>'
});

router.get('/about', ctx => {
    ctx.body = '<h1>HAKKINDA SAYFASINA HOSGELDINIZ</h1>'
});
router.get('/contact', ctx => {
    ctx.body = '<h1>ILETISIM SAYFASINA HOSGELDINIZ</h1>'
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const port = 3000

app.listen(port, () =>{
    console.log(`Sunucu port ${port} da çalışmaya başladı...`)
})
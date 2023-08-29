const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

dotenv.config();
console.log(process.env.PEXEL_API_KEY);

app.use(cors())

app.use(function(req, res, next) {
    console.log("test");
    console.log(process.env.PEXEL_API_KEY);
    res.setHeader('Authorization', process.env.PEXEL_API_KEY)
    next()
});

app.use(createProxyMiddleware({
  router: (req) => new URL(req.path.substring(1)),
  pathRewrite: (path, req) => (new URL(req.path.substring(1))).pathname,
  changeOrigin: true,
  logger: console
}))

app.listen(8088, () => {
  console.info('proxy server is running on port 8088')
})
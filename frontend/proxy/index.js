const express = require('express');
const app = express();
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(cors())

app.use('/', createProxyMiddleware({ target: 'http://localhost:4200', changeOrigin: true }));

app.listen(3000,()=>{"proxy started"})
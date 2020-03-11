module.exports = {
    port: process.env.PORT || 8081,
    secret: 'secretKey',
    production: ((process.env.NODE_ENV === "production")? true:false),
}
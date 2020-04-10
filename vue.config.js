module.exports = {
    productionSourceMap: process.env.NODE_ENV !== 'production',
    baseUrl: process.env.NODE_ENV === 'production' ? './' : ''
}

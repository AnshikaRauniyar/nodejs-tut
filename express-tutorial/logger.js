const logger = (req, res, next) => {
    const date = new Date().getFullYear()
    const {method, url} = req;
    console.log(method, url, date)
    next()
}

module.exports = logger
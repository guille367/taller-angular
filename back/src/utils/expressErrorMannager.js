class ExpressErrorMannager {
    static setMannager(app) {
        app.use((req, res, next) => {
            var error = new Error('Not found.')
            error.status = 404
            next(error)
        })
        
        app.use((err, req, res, next) => {
            console.log(err);
            res.status(err.status || 500).send({
                error: err.message
            })
        })
    }
}

module.exports = ExpressErrorMannager
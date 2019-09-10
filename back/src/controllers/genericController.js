class GenericContrller{
    static resolve(next, promisse, thenFunc, statusCode = 400){
        promisse
            .then(thenFunc)
            .catch(err => {
                var error = new Error(err.message);
                error.status = statusCode;
                next(error);
            });
    }

};

module.exports = GenericContrller;
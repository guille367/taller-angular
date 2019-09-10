const GenericFilter = require('./genericFilter');
class UserFilter extends GenericFilter{
    constructor(){
        super();
        this.data =  Object.assign(this.data,{
            username: null,
			password: null,
			salt: null,
        })
    }

};

module.exports = UserFilter;
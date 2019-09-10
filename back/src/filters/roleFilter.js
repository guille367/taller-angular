const GenericFilter = require('./genericFilter');
class RoleFilter extends GenericFilter{
    constructor(){
        super();
        this.data =  Object.assign(this.data,{
            name: null,
			code: null,
        })
    }

};

module.exports = RoleFilter;
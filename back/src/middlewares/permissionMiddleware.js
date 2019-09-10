class PermissionMiddleware {
	static hasPermission(permissionCode) {
		return (req, res, next) => {
			const token = req.token
			console.log(token.role.code)
			console.log()
			if ( token.role.code == 'admin'
				|| token.permissions.map(permission => permission.code).includes(permissionCode)
			) {
				console.log("tiene permisos")
				return next()
			}
			else {
				console.log("no tiene permisos")
				return next(new Error(`no posee el permiso ${permissionCode}`))
			}
		}
	}
}

module.exports = PermissionMiddleware
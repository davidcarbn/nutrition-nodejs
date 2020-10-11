import rolesCatalog from '../rolesCatalog'

class User {
    constructor(userID,roles) {
        this.id = userID
        this.roles = roles
    }
    hasAccess(method,url) {
        // iterate over each from user (user can have multiple roles)
        for (let role of this.roles) {
            const permissions = rolesCatalog[role].permissions
            // iterate over each permission
            for (let permission of permissions) {
                // continue search if not
                
                if (!url.match(permission.route) || !(permission.methods.indexOf(method) > -1)) {
                    
                    continue;
                }
                return true;
            }
        }
        return false;
    }
}
export default User
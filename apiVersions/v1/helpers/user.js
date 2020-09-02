import rolesCatalog from '../rolesCatalog'
import {isMongoId} from 'validator'
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
                // continue search if not found
                if (!url.match(permission.route) || !permission.methods[method]) {
                    continue;
                }
                // found permission check ownership and if 2FA is required
                if (permission.methods[method].isOwner) {
                    // if param is MongoId check userId
                    if (isMongoId(param)) {
                        return this.userID === param
                    }
                }
                return true;
            }
        }
        return false;
    }
}
export default User
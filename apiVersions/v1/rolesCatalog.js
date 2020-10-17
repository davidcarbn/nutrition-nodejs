/*
SCHEMA

permissions: [{
            route: "/auth/user",
            methods: {
                POST: {
                    require2FA: false, // does the RoleTyp need to 2FA for this route
                    requireOwn: false  // need to be the user of url?
                },
            }
        }]

*/


const rolesCatalog = {
    guest: {
        permissions: [{
            route: new RegExp('^\/api(\/v\\d+)?\/auth\/?$'),
            methods: ["GET","POST"] 
        },
        {
            route: new RegExp('^\/api(\/v\\d+)?\/user\/?$'),
            methods: ["POST"]
        }]
    },
    user: {
        permissions: [{
            route: new RegExp('^\/api(\/v\\d+)?\/auth\/?$'),
            methods: ["GET"]
        },
        {
            route: new RegExp('^\/api(\/v\\d+)?\/diary\/.+$'),
            methods: ["GET","POST"]
        },
        {
            route: new RegExp('^\/api(\/v\\d+)?\/diary\/.+\/.+\/.+$'),
            methods: ["PUT","DELETE"]
        },
        {
            route: new RegExp('^\/api(\/v\\d+)?\/food\/.+$'),
            methods: ["GET","PUT","DELETE"]
        },
        {
            route: new RegExp('^\/api(\/v\\d+)?\/food\/?$'),
            methods: ["GET","POST"]
        },
        {
            route: new RegExp('^\/api(\/v\\d+)?\/search\/.+$'),
            methods: ["POST",]
        }]
    },
    admin: {
        permissions: [{
            route: new RegExp('^\/api(\/v\\d+)?\/.*'),
            methods: ["GET","POST","PUT","DELETE"]
        }]
    }
}
export default rolesCatalog
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
            route: new RegExp('^\/api(\/v\d+)?\/auth\/user\/?$'),
            methods: {
                POST: {
                    MFArequired: false,
                    isOwner: false
                },
            }
        },
        {
            route: new RegExp('^\/api(\/v\d+)?\/auth\/?$'),
            methods: {
                POST: {
                    MFArequired: false,
                    isOwner: false
                }
            }
        }]
    },
    influencer: {
        permissions: [{
            route: new RegExp('^\/api(\/v\d+)?\/auth\/?$'),
            methods: {
                DELETE: {
                    MFArequired: false,
                    isOwner: false
                }
            }
        },
        {
            description: "Delete user",
            route: new RegExp('^\/api(\/v\d+)?\/auth\/user\/.+$'),
            methods: {
                DELETE: {
                    MFArequired: true,
                    isOwner: true
                },
                UPDATE: {
                    MFArequired: true,
                    isOwner: true
                }
            }
        },
        {
            route: new RegExp('^\/api(\/v\d+)?\/auth\/refreshtoken\/.+$'),
            methods: {
                GET: {
                    MFArequired: false,
                    isOwner: true
                },
                DELETE: {
                    MFArequired: false,
                    isOwner: true
                }
            }
        }]
    }
}
export default rolesCatalog
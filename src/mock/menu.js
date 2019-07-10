const navbarRouters = [
    {
        id: 1,
        name: 'Sub Menu1',
        path: '/subMenu1',
        submenu:[
            {
                id: 1.1,
                name: 'Dashboard',
                path: '/dashboard',
            }
        ]
    },
    {
        id: 2,
        name: 'About',
        path: '/about',
        submenu:[]
    },
    {
        id: 3,
        name: 'Login',
        path: '/login',
        submenu:[]
    }
]

export default navbarRouters;
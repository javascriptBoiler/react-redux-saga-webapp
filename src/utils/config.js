
module.exports = {
    name: 'Share_IT',
    CORS: ['http://localhost:5000', 'https://reqres.in/'],
    apiPath: 'https://reqres.in',
    api: {
        userLogin: `/api/login`,
        getUser: '/api/users/2'
    },
}
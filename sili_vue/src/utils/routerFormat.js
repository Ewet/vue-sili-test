export default (router) => {
    router.beforeEach((to, from, next) => {
        console.log(to,from)
        next()
    })
}

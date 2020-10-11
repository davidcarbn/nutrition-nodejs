
const authorization = (req,res,next) => {
    const url = req.originalUrl
    const method = req.method
    if (req.user.hasAccess(method,url)) {
        next()
        return;
    }
    return res.status(401).end()

}
export default authorization
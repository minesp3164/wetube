export const localMiddleware = (req,res,next) =>{
    //순서 중요.
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "wetube";
    res.locals.loggedInUser = req.session.user;
    console.log(req.session);
    next();
}
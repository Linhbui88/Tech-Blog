const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
};
const withoutAuth = (req,res,next) =>{
  console.log(req.session)
  if(req.session.loggedIn) {
    res.redirect('/')
  } else {
    next();
  }
}

module.exports = {
  withAuth,
  withoutAuth
}

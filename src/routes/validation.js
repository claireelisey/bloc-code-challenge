module.exports = {

    validatePosts(req, res, next) {

        if(req.method === "POST") {
            req.checkBody("body", "must be less than 300 characters in length").isLength({max: 300});
        }

        const errors = req.validationErrors();
    
        if (errors) {
            req.flash("error", errors);
            return res.redirect(303, req.headers.referer)
        } else {
            return next();
        }

    }

}
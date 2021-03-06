const router = require('express-promise-router')();
const pubSvc = require('../search');

router.get('/:pmid', (request, response, next) => {
    /* jshint unused: vars */
    return pubSvc
        .fetchResultDetail(request.params.pmid)
        .then(details => {
            response.render('abstractSections', {"data": details});
        });
});

module.exports = router;

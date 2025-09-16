//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// POST handler for the email page on oc-auth-code 
router.post('/oc-auth-code/gov-onelogin-email', function (req, res) {
  req.session.data['emailAddress'] = req.body.govOneLoginEmail
  res.redirect('/oc-auth-code/gov-onelogin-password')
})
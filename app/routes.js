const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/confirmation', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    const ballsCount = req.session.data['how-many-balls']
  
    if (ballsCount === 'None - I cannot juggle') {
      res.redirect('/start')
    } else {
      res.redirect('/confirmation')
    }
  })


  router.post('/result-1', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    const resultType = req.session.data['Freehold-or-Leasehold']
  
    if (resultType === 'Freehold') {
      res.redirect('/result-1')
    } else if(resultType === 'Leasehold') {
      res.redirect('/result-2')
    } 
  })


module.exports = router

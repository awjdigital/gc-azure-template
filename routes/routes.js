const express = require('express')
const router = express.Router();

var homeController = require('../controllers/homeController.js')

// TOP LEVEL
// GETS
router.get('/', homeController.home_get);
router.get('/accessibility', homeController.accessibility_get);
router.get('/feedback', homeController.feedback_get);
router.get('/help', homeController.help_get);
router.get('/feedback-thanks', homeController.feedback_thanks_get);

// POSTS
router.post('/feedback', homeController.feedback_post);

module.exports = router
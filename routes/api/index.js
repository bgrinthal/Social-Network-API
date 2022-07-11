const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
// router.use('/thoughts', thoughtRoutes);

module.exports = router;

// Un-comment thoughts.  Commented out for testing
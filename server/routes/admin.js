const express = require('express');
const router = express.Router();
const { getDashboardStats, getUsersList, updateUserRole } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/auth');

router.use(protect, admin);

router.get('/dashboard', getDashboardStats);
router.get('/users', getUsersList);
router.put('/users/:id/role', updateUserRole);

module.exports = router;

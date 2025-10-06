import express from 'express';
import {
  getAllUsers,
  getUserById,
  updateUserRole,
  deleteUser,
  getDashboardStats
} from '../controllers/userController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';
import { requireAdmin, requireTeamMember } from '../middlewares/roleMiddleware.js';

const router = express.Router();

// Admin routes
router.get('/admin/users', authenticateToken, requireAdmin, getAllUsers);
router.get('/admin/users/:id', authenticateToken, requireAdmin, getUserById);
router.put('/admin/users/:id/role', authenticateToken, requireAdmin, updateUserRole);
router.delete('/admin/users/:id', authenticateToken, requireAdmin, deleteUser);
router.get('/admin/dashboard', authenticateToken, requireAdmin, getDashboardStats);

// Team routes
router.get('/team/dashboard', authenticateToken, requireTeamMember, (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to team dashboard',
    data: {
      user: req.user,
      permissions: ['view_reports', 'manage_projects']
    }
  });
});

// Regular user routes
router.get('/dashboard', authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to user dashboard',
    data: {
      user: req.user
    }
  });
});

export default router;
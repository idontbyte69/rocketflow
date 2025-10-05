/**
 * Middleware to check if user has required role(s)
 */
export const requireRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Insufficient permissions'
      });
    }

    next();
  };
};

/**
 * Middleware to check if user is admin
 */
export const requireAdmin = (req, res, next) => {
  return requireRole('ADMIN')(req, res, next);
};

/**
 * Middleware to check if user is team member or above
 */
export const requireTeamMember = (req, res, next) => {
  return requireRole('ADMIN', 'TEAM_MEMBER')(req, res, next);
};

/**
 * Middleware to check if user is verified
 */
export const requireVerified = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required'
    });
  }

  if (!req.user.isVerified) {
    return res.status(403).json({
      success: false,
      message: 'Email verification required'
    });
  }

  next();
};

/**
 * Middleware to check if user owns resource or is admin
 */
export const requireOwnershipOrAdmin = (userIdField = 'userId') => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const resourceUserId = req.params[userIdField] || req.body[userIdField];
    
    if (req.user.role === 'ADMIN' || req.user.id === parseInt(resourceUserId)) {
      return next();
    }

    return res.status(403).json({
      success: false,
      message: 'Access denied'
    });
  };
};
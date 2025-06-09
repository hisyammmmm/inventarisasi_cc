import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // kalau tokennya gaada
  if (token == null) {
    return res.status(401).json({
      success: false,
      message: 'Access token required'
    });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    if (error) {
      return res.status(403).json({
        success: false,
        message: 'Invalid or expired token'
      });
    }
    
    req.email = decoded.email;
    req.user_id = decoded.id;        // Sekarang konsisten menggunakan 'id'
    req.username = decoded.username;
    req.role = decoded.role;
    next();
  });
};
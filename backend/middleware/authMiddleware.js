import jwt from "jsonwebtoken";

// Hardcode secret key (contoh, GANTI dengan secret yang kuat)
const ACCESS_TOKEN_SECRET = "secretHardcodeYangPanjangDanSulit123!";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, ACCESS_TOKEN_SECRET, (error, decoded) => {
    if (error) return res.sendStatus(403); // Forbidden
    req.email = decoded.email;
    req.user_id = decoded.id;
    req.username = decoded.username;
    req.role = decoded.role;
    next();
  });
};

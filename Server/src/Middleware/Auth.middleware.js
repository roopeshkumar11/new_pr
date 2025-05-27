import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {

  const authHeader = req.headers.authorization;
  console.log("authheader",authHeader)

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided, authorization denied' });
  }

  const token = authHeader.split(' ')[1];

  try {
 
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = decoded; 
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token is not valid' });
  }
};

export default authMiddleware;

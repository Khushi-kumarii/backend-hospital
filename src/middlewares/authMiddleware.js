const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', ''); 

    if (!token) {
        return res.status(401).json({ message: 'No token provided. Unauthorized!' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        req.user = decoded; 
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token. Unauthorized!' });
    }
};

module.exports = authMiddleware;

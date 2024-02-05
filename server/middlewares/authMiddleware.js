const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Token is missing" });
  }

  try {
    let constToken = token.replace("Bearer ", "");
    const decoded = jwt.verify(constToken, process.env.JWT_SECRET);

    req.user = decoded.user;

    next();
  } catch (error) {
    console.error("Error validating JWT:", error.message);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

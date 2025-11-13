import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const coordinatorAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token)
      return res
        .status(401)
        .json({ success: false, message: "Not authorized. Please log in." });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found." });

    // Attach user to request for later use
    req.user = user;
    req.userId = user._id;
    req.userRole = user.role;

    // ✅ If you still store a role, keep this optional check:
    // if (user.role !== "coordinator")
    //   return res.status(403).json({ success: false, message: "Access denied. Coordinators only." });

    next();
  } catch (error) {
    res
      .status(401)
      .json({ success: false, message: "Invalid token or authorization error." });
  }
};

export default coordinatorAuth;

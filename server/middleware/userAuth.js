import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized, Login Again" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    // ✅ Attach the whole user object
    req.user = user;
    req.userId = user._id; // for convenience
    req.userRole = user.role;

    next();
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message });
  }
};

export default userAuth;

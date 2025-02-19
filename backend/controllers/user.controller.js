import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUser = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
    //$ne is mongoDb query which means (not equal).

    res.status(200).json(filteredUser);
  } catch (error) {
    console.error("Error in getUsersForSidebar", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

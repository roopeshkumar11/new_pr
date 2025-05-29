import { User } from "../../Models/User.model.js";

export const deleteuser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleting user with ID:", id);

    const response = await User.findByIdAndDelete(id);

    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

import User from "../models/user.js";
export const logout = (req, res) => {
    res.clearCookie("token", { httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV !== "development" });
    res.send("Logged out successfully");
}
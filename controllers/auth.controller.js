import genToken from "../config/token.js"
import User from "../models/user.model.js"
import axios from "axios"


export const googleAuth = async (req, res) => {
    try {
        const { access_token } = req.body;

        // Securely fetch user data from Google with the access token
        const response = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: `Bearer ${access_token}` }
        });

        const { name, email } = response.data;

        let user = await User.findOne({ email })
        if (!user) {
            user = await User.create({
                name,
                email
            })
        }
        let token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({ message: `Google auth error ${error}` })
    }

}

export const logOut = async (req, res) => {
    try {
        await res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        })
        return res.status(200).json({ message: "LogOut Successfully" })
    } catch (error) {
        return res.status(500).json({ message: `Logout error ${error}` })
    }

}
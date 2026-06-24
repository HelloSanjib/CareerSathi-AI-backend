import jwt from "jsonwebtoken"


const isAuth = async (req, res, next) => {
    try {
        let token = req.cookies?.token

        if (!token && req.headers.authorization) {
            const authHeader = req.headers.authorization
            if (authHeader.startsWith("Bearer ")) {
                token = authHeader.split(" ")[1]
            }
        }

        if (!token) {
            return res.status(400).json({ message: "user does not have a token" })
        }
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)

        if (!verifyToken) {
            return res.status(400).json({ message: "user does not have a valid token" })
        }
        req.userId = verifyToken.userId

        next()


    } catch (error) {
        console.error("isAuth Error (Token invalid or expired):", error.message);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
}

export default isAuth
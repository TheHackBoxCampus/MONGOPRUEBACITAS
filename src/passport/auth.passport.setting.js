import passport from "passport";
import enviroments from "../env/env.js";
import { Strategy as BearerSync } from "passport-http-bearer";
import jwt from "jsonwebtoken"

passport.use(new BearerSync((token, cb) => {
    jwt.verify(token, enviroments.KEY, { algorithms: "HS256" }, (err, decoded) => {
        err ? cb(err) : cb(null, decoded, { scope: "*" })
    })
}))

export default passport; 
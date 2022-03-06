const Jwt_Strategy = require("passport-jwt").Strategy
const Extract_TOKEN = require("passport-jwt").ExtractJwt;
const User = require("../models/users-model");

const options = {
    secretOrKey: process.env.SECRETKEY,
};
  
options.jwtFromRequest = Extract_TOKEN.fromAuthHeaderAsBearerToken();

module.exports = (passport) => {
    passport.use(
      new Jwt_Strategy (options, (userFromPayload, done) => {
        User.findById(userFromPayload.foundUser._id)
          .then((user) => {
            if (user) return done(null, user);
            done(null, false);
          })
          .catch((err) => done(err, false));
      })
    );
  };
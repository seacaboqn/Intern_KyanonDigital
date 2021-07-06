const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');
const userModel = require('../models/user');
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;


passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    const { id } = jwt_payload;
    const user = await userModel.findByPk(id);
    if(user){
        done(null, user);
    }
    else{
        done(null,false);
    }
}));


passport.use(new LocalStrategy({session: false},async (username, password, callback) => {
    // We use default {username: "catlover", password: "cat", id: 1} to authenticate.
    // You should use database to check for user credentials.
    const user = await userModel.findOne({where: {username: username}});
    const check = await bcrypt.compare(password, user.password);
    if (check) {
        callback(null, { id: user.id, username: user.username })
    } else
        callback(null, false);
}));


module.exports = passport;
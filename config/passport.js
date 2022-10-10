const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/clients');

passport.use(new LocalStrategy({
  usernameField: 'correo',
  passwordField: 'password',
}, function (correo, password, done) {
  User.findOne({
    where: {
      correo: correo
    }
  }).then(function (user) {
    if (!user || !user.validatePassword(password)) {
      return done(null, false, {
        errors: {
          'correo o contraseña': 'incorrectos'
        }
      })
    }
    return done(null, user);
  }).catch(done);
}));

module.exports = passport;
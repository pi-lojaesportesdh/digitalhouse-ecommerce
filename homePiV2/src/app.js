var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var privacyRouter = require('./routes/privacy');
var termsRouter = require('./routes/termsUse');
var registrationRouter = require('./routes/registration');
var registConfirmRouter = require('./routes/registConfirm');
var exchangeRouter = require('./routes/exchange');
var contactRouter = require('./routes/contact');
var contactConfirmRouter = require('./routes/contactConfirm');
var recPasswordRouter = require('./routes/recPassword');
var recPassConfirmRouter = require('./routes/recPassConfirm')
var createNewPassRouter = require('./routes/createNewPass')
var createNewPassConfirmRouter = require('./routes/createNewPassConfirm')
var shoppingCartRouter = require('./routes/shoppingCart')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter)
app.use('/privacy', privacyRouter);
app.use('/registration', registrationRouter);
app.use('/registConfirm',registConfirmRouter);
app.use('/termsUse', termsRouter);
app.use('/contact', contactRouter);
app.use('/contactConfirm', contactConfirmRouter);
app.use('/recPassword', recPasswordRouter);
app.use('/recPassConfirm', recPassConfirmRouter);
app.use('/createNewPass', createNewPassRouter);
app.use('/createNewPassConfirm', createNewPassConfirmRouter);
app.use('/shoppingCart', shoppingCartRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

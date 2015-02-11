
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var home = require('./routes/home');
var add_a_course = require('./routes/add_a_course');
var class_page1 = require('./routes/class_page1');
var course_category = require('./routes/course_category');
var enrolled_classes = require('./routes/enrolled_classes');
var help = require('./routes/help');
var log_out = require('./routes/log_out');
var logged_in = require('./routes/logged_in');
var profile = require('./routes/profile');
var settings = require('./routes/settings');
var sign_in = require('./routes/sign_in');
var sign_up = require('./routes/sign_up');
var student_mode = require('./routes/student_mode');
var taught_courses = require('./routes/taught_courses');
var teacher_mode = require('./routes/teacher_mode');
var teaching_courses = require('./routes/teaching_courses');
var term_of_use = require('./routes/term_of_use');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', home.view);
app.get('/add_a_course', add_a_course.view);
app.get('/class_page1', class_page1.view);
app.get('/course_category', course_category.view);
app.get('/enrolled_classes', enrolled_classes.view);
app.get('/help', help.view);
app.get('/log_out', log_out.view);
app.get('/logged_in', logged_in.view);
app.get('/profile', profile.view);
app.get('/settings', settings.view);
app.get('/sign_in', sign_in.view);
app.get('/sign_up', sign_up.view);
app.get('/student_mode', student_mode.view);
app.get('/taught_courses', taught_courses.view);
app.get('/teacher_mode', teacher_mode.view);
app.get('/teaching_courses', teaching_courses.view);
app.get('term_of_use', term_of_use.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

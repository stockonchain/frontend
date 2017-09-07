// Import the Express module
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
// var cookieParser = require('cookie-parser')
// var expressSession = require('express-session')
// var passport = require('passport')

// Import the 'path' module (packaged with Node.js)
const path = require('path')

// Create a new instance of Express
const app = express()

// Log requests to the console.
app.use(logger('dev'))

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Register routes
// var routes = require('./routes/api')(passport)
app.use('/', require('./server/routes/web'))
app.use('/rest', require('./server/routes/api'))
app.use(express.static(path.join(__dirname, 'public')))

// Initialize Passport
// var initPassport = require('./passport/init')
// initPassport(passport)
// app.use(passport.initialize())
// app.use(passport.session())

// var i18n = require("i18n")
// i18n.configure({
//     locales: ['en', 'fr'],
//     cookie: 'wallolocale',
//     directory: __dirname + '/locales'
// })
// app.use(i18n.init)
// app.locals.title = 'My App'

// view engine setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'jade')

// Using the flash middleware provided by connect-flash to store messages in session
// and displaying in templates
// var flash = require('connect-flash')
// app.use(flash())

// app.use(cookieParser())
// app.use(expressSession({ secret: 'mySecretKey', resave: true, saveUninitialized: true }))

// Create a Node.js based http server on port 8080
const port = 80
const server = require('http').Server(app).listen(port, function() {
	console.log('listening on *:' + port)
})

// Create a Socket.IO server and attach it to the http server
// var io = require('socket.io').listen(server)
// var game = require('./server')
// Listen for Socket.IO Connections. Once connected, start the game logic.
// io.sockets.on('connection', function(socket) {
// 	console.log('client connected')
// 	game.initGame(io, socket)
// })
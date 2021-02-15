const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const fileUpload = require('express-fileupload');
const router = require('./router');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   store: new FileStore()
// }));

app.all('*', function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", 'http://sejun-redux-mall.s3-website.ap-northeast-2.amazonaws.com/');
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.set('trust proxy', 1)

// app.enable('trust proxy')
app.use(session({
  name: "random_session",
  secret: "adas%#$%ASDas51231ASq41WDzx3432s",
  resave: false,
  proxy : true,
  secureProxy : true,
  saveUninitialized: true,
  cookie: {
      path: "/",
      secure: true,
      //domain: ".herokuapp.com", REMOVE THIS HELPED ME (I dont use a domain anymore)
      httpOnly: true
  }
}));

app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser('adas%#$%ASDas51231ASq41WDzx3432s'));
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
  })

app.get('/', (req, res) => {
  res.send('Sejun Node Express Server 구동 완료');
})
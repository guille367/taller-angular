const express = require('express');
const bodyParser = require('body-parser');
const ExpressErrorMannager = require('./utils/expressErrorMannager')
const cors = require('cors')

//<import-routes>
const authRouter = require('./routes/authRouter')
const userRouter = require('./routes/userRouter')
const roleRouter = require('./routes/roleRouter')
const AuthMiddleware = require('./middlewares/authMiddleware')
const pokemonRouter = require('./routes/pokemonRouter')
//</import-routes>

const app = express();

//middleware
    //body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
    //cors
app.use(cors())

//<routes>
app.use('/auth', authRouter)

app.use(AuthMiddleware.isAuth)
app.use(AuthMiddleware.singleSignOn)

app.use('/roles', roleRouter)
app.use('/users', userRouter)
app.use('/pokemons', pokemonRouter)
//</routes>

//erros
ExpressErrorMannager.setMannager(app)


module.exports = app;
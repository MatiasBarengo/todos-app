const jwt = require( 'jsonwebtoken' );
require( 'dotenv' ).config();

const authMiddleware = ( req, res, next ) =>
{
  let { authorization: token } = req.headers;
  token = token.replace( 'Bearer ', '' );
  console.log( token );
  jwt.verify(
    token,
    process.env.JWT_SECRET,
    { algorithms: 'HS512' },
    ( err, decoded ) =>
    {
      if ( err )
      {
        res.status( 400 ).json( {
          error: 'invalid token',
          message: 'token invalido o expirado'
        } );
      } else
      {
        console.log( decoded );
        next();
      }
    }
  )

};

module.exports = authMiddleware


// vamos a valkidar el token



// si es valido pasa

// si es invalido respondemos anda pasha
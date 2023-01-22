const jwt = require( 'jsonwebtoken' );
const AuthService = require( '../services/auth.service' );
require( 'dotenv' ).config();

const userLogin = async ( req, res ) =>
{
  try
  {
    const { email, password } = req.body;
    const response = await AuthService.login( email, password );
    if ( response.isValid )
    {
      const data = {
        email: response.result.email,
        username: response.result.username,
        id: response.result.id
      }
      // firmo un nuevo token
      const token = jwt.sign( data, process.env.JWT_SECRET, {
        algorithm: "HS512",
        expiresIn: '1 m'
      } )
      data.token = token;
      res.json( data );
    } else
    {
      // estado 401 
      res.status( 401 ).json( { messsage: 'credenciales invalidas' } );
    }
  } catch ( error )
  {
    res.status( 400 ).json( error.message );
  }
}

module.exports = { userLogin };
const jwt = require('jsonwebtoken');
const {promisify} = require('util');

module.exports = {
	eAdmin: async function (req, res, next){
		const authHeaders = req.headers.authorization;
		if(!authHeaders){
			return res.status(400).json({
				erro: true,
				mensagem: "Falta o baren token, faça o login"
			});
		}

		const [, token]=authHeaders.split(" ");
		console.log(token)

		if(!token){
			return res.status(400).json({
				erro: true,
				mensagem: "Falta o baren token, faça o login"
			});
		}

		try{
			const decode = await promisify(jwt.verify)(token, "NxJt@9!2L6VT2R@j");
			req.userId = decode.id;
			return next();
		}catch(err){
			return res.status(400).json({
				erro: true,
				mensagem: "Falta o baren token, faça o login" + err,
			});
		}
	}
}
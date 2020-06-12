const User = require('../models/User')

const { hash } = require('bcryptjs')
const crypto = require('crypto')
const mailer = require('../../lib/mailer')


module.exports = {
    
    loginForm(req,res){
        return res.render("session/login")
    },
    login(req,res){
        req.session.userId = req.user.id
        
        return res.redirect("/users")

    },
    
    logout(req,res){
        req.session.destroy()
        return res.redirect("/")
    },

    forgotForm(req,res){
        return res.render("session/forgot-password")
    },

    async forgot(req,res){

        const user = req.user

        try {
            // criar token para usuario
            const token = crypto.randomBytes( 20).toString("hex")
    
            // criar expiração do token
            let now = new Date()
            now = now.setHours(now.getHours() +1)
    
            await User.update(user.id, {
                reset_token: token,
                reset_token_expires: now
            })
    
            // enviar email com o link da recuperação de senha
    
            await mailer.sendMail({
                to: user.email,
                from: 'no-reply@launchstore.com.br',
                subject: 'Recuperação de Senha',
                html: `<h2>Perdeu a senha?</h2>
                <p>Não se preocupe, clique no link abaixo para recuperar sua senha </p>
                <p>
                    <a href="http:localhost:3000/users/password-reset?token=${token}" target="_blank">
                        RECUPERAR SENHA
                    </a>
                </p>
                `,
            })
    
            //avisar o usuário do envio do email
            return res.render("session/forgot-password", {
                success: "Verifique seu email para resetar sua senha!"
            })

        }catch(err) {
            console.error(err)
            return res.render("session/forgot-password", {
                error: "Erro inesperado, tente novamente"
            })
        }

    },

    resetForm(req,res){
        return res.render("session/password-reset", { token:req.query.token})

    },

   async reset(req,res){
       const  user  = req.user
        const { password, token } = req.body

        try{
           
            //cria um novo hash de senha
            const newPassword = await hash(password, 8)

            //atualiza o usuario
            await User.update(user.id, {
                password: newPassword,
                reset_token: "",
                reset_token_expires: "",
            })

            // avisa o usuario que ele tem uma niva senha
            return res.render("session/login", {
                user:req.body,
                success: "Senha atualizada! Faça seu login"
            })


        }catch(err){
            console.error(err)
            return res.render("session/password-reset", {
                user:req.body,
                token,
                error: "Erro inesperado, tente novamente"
            })
        }

    }
    
}
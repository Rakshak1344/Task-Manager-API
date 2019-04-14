const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'rakshithgajendra@gmail.com',
        subject: 'Welcome to my app',
        text: `Welcome to My App ${name}, Have a nice Day ${email}.`
    })
}

const sendCancellationEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'rakshithgajendra@gmail.com',
        subject: 'Sorry for Our Inconvinence',
        text: `${name} Please send us feedback to improve ourself`,
        html: '<input type="textarea" placeholder="Feedback"><br><button>Submit</button>'
    })
}
module.exports ={
    sendWelcomeEmail,
    sendCancellationEmail
}
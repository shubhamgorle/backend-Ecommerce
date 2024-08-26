const nodemailer = require('nodemailer');
const sendEmail = async (options) => {
    const trasporter = nodemailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        service: process.env.SMPT_SERVICE,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD
        }
    })
    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message
    }
    await trasporter.sendMail(mailOptions)
}

module.exports = sendEmail;
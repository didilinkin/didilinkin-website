const nodemailer = require("nodemailer")

// 获取密钥
const smtp_username = process.env.SMTP_USERNAME
const smtp_password = process.env.SMTP_PASSWORD
const smtp_host = process.env.SMTP_HOST
const smtp_port = process.env.SMTP_PORT
const admin_email = process.env.ADMIN_EMAIL

// 定义电子邮件内容
const mailOptions = {
  from: smtp_username,
  to: admin_email,
  subject: "[个人主页] GitHub Action 完成通知",
  text: "发布 任务已完成!",
}

// 创建一个传输实例并连接到 SMTP 服务器
const transporter = nodemailer.createTransport({
  host: smtp_host,
  port: smtp_port,
  secure: false,
  auth: {
    user: smtp_username,
    pass: smtp_password,
  },
})

// 发送邮件
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error.message)
  } else {
    console.log(`Message sent: ${info.response}`)
  }
})

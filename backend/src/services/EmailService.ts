import { Request } from 'express';
interface IMailTo {
  name: string,
  email: string
}

interface IMailMessage {
  subject: string,
  body: string,
  attachments?: Array<string> // ou string[] para representar o array desse tipo de variável
}

interface IMessageDTO {
  to: IMailTo,
  message: IMailMessage
}

interface IEmailService {
  sendMail(Request: IMessageDTO): void
}

class EmailService implements IEmailService {
  sendMail({to, message}: IMessageDTO) {
    console.log(`Enviado para ${to.name}: ${message.subject}`)
  }
}

export default EmailService
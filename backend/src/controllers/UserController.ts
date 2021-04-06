import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
  { name: 'Jean', email: 'jeanrraschini@gmail.com' }
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService()

    emailService.sendMail({
      to: {
        name: 'Jean Raschini',
        email: 'jeanrraschini@gmail.com'
      },
      message: {
        subject: 'Email teste Typescript',
        body: 'Hello world de Typescript'
      }
    })
  }
}
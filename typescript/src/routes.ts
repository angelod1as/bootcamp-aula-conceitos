import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "angelo",
    email: "angelo@oi",
    password: "123",
    techs: ["React", "React Native", { title: "js", experience: 100 }]
  });

  return response.json({ message: 'Hello World' })
}
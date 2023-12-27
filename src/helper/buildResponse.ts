import { Response } from 'express';
import { iCourse, iUser } from '../interfaces/interfaces';

function buildResponse(res: Response, code: number, message: iCourse[] |iUser[]| string) {
  res.status(code).send(message);
}

export { buildResponse };

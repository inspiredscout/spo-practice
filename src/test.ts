import { Router, Request, Response } from 'express';
import routes from './api/routes';

export async function test(req: Request , res: Response) {
    res.json({Message: "Никита Уебище!"})
}
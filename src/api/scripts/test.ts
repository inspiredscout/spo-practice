import { Router, Request, Response } from 'express';
import routes from '../routes';

export async function test(req: Request , res: Response) {
    res.json({Message: "Гриша ленивое уебище!"})
}
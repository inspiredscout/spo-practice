import { Router, Request, Response } from 'express';
import routes from '../routes';

export async function test2(req: Request , res: Response) {
    
    res.json({Message: "Ярик пивное уебище!"})
}
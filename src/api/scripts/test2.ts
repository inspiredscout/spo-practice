import { Request, Response } from 'express';

export async function test2(req: Request , res: Response) {
    
    res.json({Message: "Ярик пивное уебище!"})
}
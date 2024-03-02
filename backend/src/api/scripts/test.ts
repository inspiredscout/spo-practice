import { Request, Response } from 'express';

export async function test(req: Request , res: Response) {
    res.json({Message: "Гриша ленивое уебище!"})
}
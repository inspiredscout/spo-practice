import { Get, Route, Controller, Tags } from 'tsoa';

@Tags("Tests")
@Route("test")
export default class TestController extends Controller{
    @Get("/1")
    async test() {
        return {Message: "Гриша ленивое уебище!", success: true, status: 200}
    }

    @Get("/2")
    async test2() {
        return { Message: "Ярик пивное уебище!", success: true, status: 200 };
}}
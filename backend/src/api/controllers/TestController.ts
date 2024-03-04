import { Get, Route, Controller } from 'tsoa';

export default class TestController extends Controller{
    @Route("test")
    @Get()
    async test() {
        return {Message: "Гриша ленивое уебище!"}
    }

    @Route("test2")
    @Get()
    async test2() {
        return {Message: "Ярик пивное уебище!"}
    }
}
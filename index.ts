import { parse, SyntaxError } from './stGrammar';

export class Test {
    test1() {
        parse("hello", null);
    }
}

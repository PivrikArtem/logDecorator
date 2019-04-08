import { logMethod } from './log-method';

class Calculator{

    @logMethod
    add(x: number, y: number): number{
        return x + y;
    }
}

let calc = new Calculator();
let z = calc.add(4, 5);
z = calc.add(6, 7);

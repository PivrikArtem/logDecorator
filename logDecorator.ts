import { logProperty } from './log-property';
import { logMethod } from './log-method';

class A {
    @logProperty
    _val = 5;

    @logMethod
    val() {
        return this._val;
    }
}

const a = new A();

console.log("val 5 ==", a.val());
console.log("_val 5 ==", a._val);

export function logProperty(target, property) {
    let _val = target[property];

    delete target[property];
    Object.defineProperty(target, property, {
        set: function (newVal) {
            console.log(`prop set: ${property} =>`, newVal);
            _val = newVal;
        },
        get: function () {
            console.log(`prop get: ${property} =>`, _val);
            return _val;
        },
        enumerable: true,
        configurable: true
    });
}

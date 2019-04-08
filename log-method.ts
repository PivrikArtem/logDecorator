export function logMethod(target:Object, property:string, descriptor:PropertyDescriptor) {
    const method = descriptor.value;

    return {
        ...descriptor,
        value: (...args) => {
            console.log(`call ${property}`);
            const result = method.apply(target, args);
            console.log(`${args} returned =>`, result);
            return result;
        },
    };
}

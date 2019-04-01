export function logMethod(target, property, descriptor) {
    const method = descriptor.value;

    return {
        ...descriptor,
        value: (...args) => {
            console.log(`call ${property}`);
            const result = method.apply(target, args);
            console.log(`${property} returned =>`, result);
            return result;
        },
    };
}

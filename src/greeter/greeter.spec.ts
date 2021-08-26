import { Greeter } from "./greeter"

it('should say hello',
    () => {
        console.log = jest.fn();
        Greeter.sayHello();
        expect(console.log).toHaveBeenCalledWith('Hello World!');
    }
)

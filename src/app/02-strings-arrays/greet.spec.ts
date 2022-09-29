import { greet } from './greet';

describe('greet text suite', () =>{
    it ('shoul include the name in the message', ()=> {
        expect(greet('sag')).toBe('Welcome sag');
    })
});
import { greet } from './greet';

describe('greet', () =>{
    it ('shoul include the name in the message', ()=> {
        expect(greet('mosh')).toBe('Welcome mosh');
    })
});
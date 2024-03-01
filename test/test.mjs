/* global describe:false */
import { chai } from '@environment-safe/chai';
//simport { it } from '@open-automaton/moka';
import { MyClass } from '../src/index.mjs';
const should = chai.should();

describe('module', ()=>{
    describe('performs a simple test suite', ()=>{
        it('loads', async ()=>{
            const thisClass = new MyClass();
            thisClass.greeting().should.equal('Hello World');
        });
    });
});


const addFive = require(`./addFive`);

test('returns val + 5', ()=>{
    expect(addFive(2)).toBe(7);
})
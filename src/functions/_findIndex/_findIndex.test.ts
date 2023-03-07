import './index'

describe('FindIndex function', () => {
    test('If no element matches the predicate, the function should return -1', () => {
        const index = ['a', 'b', 'c']._findIndex((elt) => elt === 'd')
        expect(index).toBe(-1)
    })

    test('If several elements match the predicate, the function should return the index of the first element matching', () => {
        const index = ['a', 'b', 'b', 'c']._findIndex((elt) => elt === 'b')
        expect(index).toBe(1)
    })
})

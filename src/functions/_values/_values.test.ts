import './index'

describe('Values function', () => {
    test('Return value should be an iterable iterator', () => {
        const values = ['Alice', 'Bob']._values()
        expect(Symbol.iterator in values).toBe(true)
        expect(typeof values[Symbol.iterator]).toBe('function')
    })

    test('Return value should not be an array', () => {
        const values = ['Alice', 'Bob']._values()
        expect(Array.isArray(values)).toBe(false)
    })

    test('Order of items should be preserved', () => {
        const values = Array.from(['a', 'b', 'c']._values())
        expect(values).toEqual(['a', 'b', 'c'])
    })
})

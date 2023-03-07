import './index'

describe('Keys function', () => {
    test('Return value should be an iterable iterator', () => {
        const keys = ['Alice', 'Bob']._keys()
        expect(Symbol.iterator in keys).toBe(true)
        expect(typeof keys[Symbol.iterator]).toBe('function')
    })

    test('Return value should not be an array', () => {
        const keys = ['Alice', 'Bob']._keys()
        expect(Array.isArray(keys)).toBe(false)
    })

    test('Order of items should be preserved', () => {
        const keys = Array.from(['a', 'b', 'c']._keys())
        expect(keys).toEqual([0, 1, 2])
    })
})

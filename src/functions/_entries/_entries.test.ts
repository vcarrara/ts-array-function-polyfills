import './index'

describe('Entries function', () => {
    test('Return value should be an iterable iterator', () => {
        const entries = ['Alice', 'Bob']._entries()
        expect(Symbol.iterator in entries).toBe(true)
        expect(typeof entries[Symbol.iterator]).toBe('function')
    })

    test('Return value should not be an array', () => {
        const entries = ['Alice', 'Bob']._entries()
        expect(Array.isArray(entries)).toBe(false)
    })

    test('If the array is empty, entries should give an empty array', () => {
        const entries = []._entries()
        expect(Array.from(entries)).toEqual([])
    })

    test('Result array should have the same length', () => {
        const array = ['a', 'b', 'c']
        const entries = array._entries()
        expect(Array.from(entries).length).toBe(array.length)
    })

    test('Order of items should be preserved', () => {
        const entries = Array.from(['a', 'b', 'c']._entries())
        expect(entries.map(([, letter]) => letter)).toEqual(['a', 'b', 'c'])
        expect(entries.map(([index]) => index)).toEqual([0, 1, 2])
    })
})

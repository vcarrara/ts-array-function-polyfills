import './index'

describe('Slice function', () => {
    test('If no start or end index is provided, a shallow copy is performed', () => {
        const john = { name: 'John' }
        const jack = { name: 'Jack' }
        const baseArray = [john, jack]
        const array = baseArray._slice()
        expect(array).toEqual([{ name: 'John' }, { name: 'Jack' }])
        // Pointers for baseArray and array should be different but they should be equal (by value)
        expect(baseArray).not.toBe(array)
        expect(baseArray).toEqual(array)
        // Elements in both array should be the exact same references
        expect(array[0]).toBe(john)
        expect(array[0]).toBe(baseArray[0])
        expect(array[1]).toBe(jack)
        expect(array[1]).toBe(baseArray[1])
        // Both arrays should have the same length
        expect(array.length).toBe(baseArray.length)
    })

    test('If start is a positive number, copy should start from the given start index', () => {
        const array = ['ant', 'bison', 'camel', 'duck', 'elephant']._slice(2)
        expect(array).toEqual(['camel', 'duck', 'elephant'])
    })

    test('Slice should not go further the end index if it is lesser than the array length', () => {
        const array = ['ant', 'bison', 'camel', 'duck', 'elephant']._slice(2, 4)
        expect(array).toEqual(['camel', 'duck'])
    })

    test('If end is out of bound, slice should take elements from start to the last index of the array', () => {
        const array = ['ant', 'bison', 'camel', 'duck', 'elephant']._slice(1, 5)
        expect(array).toEqual(['bison', 'camel', 'duck', 'elephant'])
    })

    test('If start is a negative number, start index should start by the end', () => {
        const array = ['ant', 'bison', 'camel', 'duck', 'elephant']._slice(-2)
        expect(array).toEqual(['duck', 'elephant'])
    })

    test('If end is a negative number, end index should start by the end', () => {
        const array1 = ['ant', 'bison', 'camel', 'duck', 'elephant']._slice(2, -1)
        expect(array1).toEqual(['camel', 'duck'])

        const array2 = ['ant', 'bison', 'camel', 'duck', 'elephant']._slice(-3, -1)
        expect(array2).toEqual(['camel', 'duck'])
    })
})

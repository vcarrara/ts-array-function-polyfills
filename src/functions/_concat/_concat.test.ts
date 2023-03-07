import './index'

describe('Concat function', () => {
    test('If no array is passed, it should return a shallowed copied base array', () => {
        const array = [{ name: 'Alice' }, { name: 'Bob' }]
        const result = array._concat()

        expect(result).toEqual(array)
        expect(result).not.toBe(array)

        expect(result[0]).toBe(array[0])
        expect(result[1]).toBe(array[1])
    })

    test('If other arrays are passed, the base array should be shallowed copied and other values should be copied at the end', () => {
        const array = [{ name: 'Alice' }, { name: 'Bob' }]
        const result = array._concat([{ name: 'Charlie' }], [{ name: 'David' }, { name: 'Evan' }])

        expect(result).toEqual([{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }, { name: 'David' }, { name: 'Evan' }])
    })
})

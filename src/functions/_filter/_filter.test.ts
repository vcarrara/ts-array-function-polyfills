import './index'

describe('Filter function', () => {
    test('Array should be empty if no element matches the predicate', () => {
        const array = [-1, -2, -3]._filter((nb) => nb > 0)
        expect(array.length).toBe(0)
    })

    test('Elements in array should match the predicate to be returned and should keep their order', () => {
        const array = [1, -2, 3]._filter((nb) => nb > 0)
        expect(array.length).toBe(2)
        expect(array).toEqual([1, 3])
    })

    test('Elements in array after filtering should be the same in memory', () => {
        const array = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]
        const filteredArray = array._filter((obj) => obj.name.startsWith('B') || obj.name.startsWith('C'))
        expect(filteredArray).toEqual([{ name: 'Bob' }, { name: 'Charlie' }])
        expect(filteredArray[0]).toBe(array[1])
        expect(filteredArray[1]).toBe(array[2])
    })
})

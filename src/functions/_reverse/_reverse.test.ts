import './index'

describe('Reverse function', () => {
    test('Reversing an empty array should not do anything', () => {
        const array = []._reverse()
        expect(array).toEqual([])
        expect(array.length).toBe(0)
    })

    test('Each element should have been moved to the right place', () => {
        const array = [1, 2, { nb: 3 }, 4]._reverse()
        expect(array).toEqual([4, { nb: 3 }, 2, 1])
        expect(array.length).toBe(4)
    })
})

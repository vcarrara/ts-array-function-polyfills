import './index'

describe('Includes function', () => {
    test('If at least one element matches the given parameter, the function should return true', () => {
        const match = [1, 2, 3, 2]._includes(2)
        expect(match).toBe(true)
    })

    test('If no element matches the given parameter, the function should return false', () => {
        const match = [1, 2, 3]._includes(4)
        expect(match).toBe(false)
    })

    test('Comparison should be made with a stric equality check', () => {
        const match1 = [1, 2, '3']._includes('2')
        expect(match1).toBe(false)

        const match2 = [1, 2, '3']._includes('3')
        expect(match2).toBe(true)
    })

    test('If fromIndex is given, search should start at the given index', () => {
        const match1 = [1, 2, 3]._includes(2, 2)
        expect(match1).toBe(false)

        const match2 = [1, 2, 3]._includes(2, 1)
        expect(match2).toBe(true)
    })

    test('If fromIndex is greater than or equal to the length of the array, false is returned', () => {
        const match = [1, 2, 3]._includes(3, 3)
        expect(match).toBe(false)
    })

    test('If fromIndex is negative, index is taken back from the end of the array', () => {
        const match1 = [1, 2, 3, 4, 5]._includes(4, -2)
        expect(match1).toBe(true)

        const match2 = [1, 2, 3, 4, 5]._includes(4, -1)
        expect(match2).toBe(false)
    })

    test('If fromIndex is too low, search should start at 0', () => {
        const match = [1, 2, 3, 4, 5]._includes(1, -10)
        expect(match).toBe(true)
    })
})

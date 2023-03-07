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
        const match = [1, 2, 3]._includes('2')
        expect(match).toBe(false)
    })
})

import './index'

describe('Some function', () => {
    test('Some returns true if at least one element matches a predicate', () => {
        const match = [-5, 4, -3]._some((nb) => nb > 0)
        expect(match).toBe(true)
    })

    test('Some returns true all elements match a predicate', () => {
        const match = [5, 4, 3]._some((nb) => nb > 0)
        expect(match).toBe(true)
    })

    test("Some returns false if all elements don't match a predicate", () => {
        const match = [-5, -4, -3]._some((nb) => nb > 0)
        expect(match).toBe(false)
    })
})

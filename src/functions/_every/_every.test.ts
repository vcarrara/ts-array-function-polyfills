import './index'

describe('Every function', () => {
    test("Every return false if at least one element doesn't match a predicate", () => {
        const match = [-5, 4, -3]._every((nb) => nb > 0)
        expect(match).toBe(false)
    })

    test('Every returns true all elements match a predicate', () => {
        const match = [5, 4, 3]._every((nb) => nb > 0)
        expect(match).toBe(true)
    })

    test("Every returns false if all elements don't match a predicate", () => {
        const match = [-5, -4, -3]._every((nb) => nb > 0)
        expect(match).toBe(false)
    })
})

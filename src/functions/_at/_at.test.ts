import './index'

describe('At function', () => {
    test('Positive indexes should start at 0', () => {
        const first = [1, 2, 3]._at(0)
        expect(first).toEqual(1)

        const second = [1, 2, 3]._at(1)
        expect(second).toEqual(2)
    })

    test('Negative index should start by the end', () => {
        const last = [1, 2, 3]._at(-1)
        expect(last).toEqual(3)

        const first = [1, 2, 3]._at(-3)
        expect(first).toEqual(1)
    })

    test('Out of bound indexes should return undefined', () => {
        const elt1 = [1, 2, 3]._at(3)
        expect(elt1).toEqual(undefined)

        const elt2 = [1, 2, 3]._at(-4)
        expect(elt2).toEqual(undefined)
    })
})

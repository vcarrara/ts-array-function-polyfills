import './index'

describe('Reduce function', () => {
    test('Reduce should be able to sum an array of number', () => {
        const sum = [100, 50, 25]._reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        expect(sum).toEqual(175)
    })

    test('Reduce should be able to transform an object to an array', () => {
        const result = [
            { id: 1, quantity: 200 },
            { id: 2, quantity: 250 },
            { id: 3, quantity: 500 },
        ]._reduce((previousValue, currentValue) => ({ ...previousValue, [currentValue.id]: currentValue.quantity }), {})
        expect(result).toEqual({
            1: 200,
            2: 250,
            3: 500,
        })
    })

    test('Reduce should work with generics and be able to concat arrays', () => {
        const result = [
            { id: 1, quantity: 200 },
            { id: 2, quantity: 250 },
            { id: 3, quantity: 500 },
        ]._reduce<number[]>((previousValue, currentValue) => [...previousValue, currentValue.quantity], [])
        expect(result).toEqual([200, 250, 500])
    })
})

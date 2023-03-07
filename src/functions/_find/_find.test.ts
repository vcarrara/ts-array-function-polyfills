import './index'

describe('Find function', () => {
    test('First element matching a predicate is returned if matching a predicate', () => {
        const firstObject = { name: 'Alice' }
        const secondObject = { name: 'Bob' }
        const thirdObject = { name: 'Alice' }
        const fourthObject = { name: 'Bob' }
        const element = [firstObject, secondObject, thirdObject, fourthObject]._find((elt) => elt.name === 'Bob')
        expect(element).not.toBe(undefined)
        expect(element).toEqual({ name: 'Bob' })
        expect(element).toBe(secondObject)
        expect(element).not.toBe(fourthObject)
    })

    test('Undefined should be returned if no element matches a predicate', () => {
        const element = [1, 2, 3]._find((nb) => nb === 0)
        expect(element).toBe(undefined)
    })

    test('Element in memory should be the same', () => {
        const obj = { name: 'John' }
        const element = [obj, { name: 'Jack' }]._find((e) => e.name === 'John')
        expect(element).toEqual({ name: 'John' })
        expect(element).toBe(obj)
        expect(element).not.toBe({ name: 'John' })
    })
})

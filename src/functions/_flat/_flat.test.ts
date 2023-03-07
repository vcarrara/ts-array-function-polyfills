import './index'

describe('Flat function', () => {
    test('If no depth is passed, the whole array should be flattened', () => {
        const array = ['I', ['am', ['a', ['very']]], ['nested', ['array']]]._flat()
        expect(Array.isArray(array)).toBe(true)
        expect(array).toEqual(['I', 'am', 'a', 'very', 'nested', 'array'])
    })

    test('If Infinity is passed for depth, flattening should affect all levels', () => {
        const array = ['I', ['am', ['a', ['very']]], ['nested', ['array']]]._flat(Infinity)
        expect(array).toEqual(['I', 'am', 'a', 'very', 'nested', 'array'])
    })

    test('Flat should remove empty slots on sparse arrays', () => {
        const array1 = ['I', ['am', , 'a'], 'sparse', , 'array']._flat()
        expect(array1).toEqual(['I', 'am', 'a', 'sparse', 'array'])

        const array2 = [, , 'but', [, , , undefined, ['values'], [, [, [,]]]], ['should', , ['be'], 'keeped', ,], ,]._flat()
        expect(array2).toEqual(['but', undefined, 'values', 'should', 'be', 'keeped'])
    })

    test('If a depth is passed, flattening should stop when the depth is reached', () => {
        const array1 = ['I', ['am', ['a', ['very']]], ['nested', ['array']]]._flat(1)
        expect(array1).toEqual(['I', 'am', ['a', ['very']], 'nested', ['array']])

        const array2 = ['I', ['am', ['a', ['very']]], ['nested', ['array']]]._flat(2)
        expect(array2).toEqual(['I', 'am', 'a', ['very'], 'nested', 'array'])
    })

    test('If the depth is lesser or equal to 0, the result should be shallow copied array', () => {
        const object = { foo: 'foo' }
        const baseArray = [object, 'I', ['am', ['nested']]]
        const notFlattenedArray = baseArray._flat(-1)
        // Array should be different in memory
        expect(notFlattenedArray).not.toBe(baseArray)
        expect(notFlattenedArray).toEqual(baseArray)
        // Values should be the same in memory
        expect(notFlattenedArray[0]).toBe(baseArray[0])
    })
})

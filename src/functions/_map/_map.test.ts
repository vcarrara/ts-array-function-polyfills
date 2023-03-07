import './index'

describe('Map function', () => {
    test('No callback function if executed if array is empty', () => {
        const fn = jest.fn((a) => a * 2)
        const array = []._map(fn)
        expect(array.length).toBe(0)
        expect(fn).not.toBeCalled()
    })

    test('Each element should have been modified by the callback function', () => {
        const fn = jest.fn((a) => a * 2)
        const array = [1, 2]._map(fn)
        expect(array).toEqual([2, 4])
        expect(array.length).toBe(2)
        expect(fn).toBeCalledTimes(array.length)
    })

    test('Result array should be a different pointer in memory', () => {
        const originalArray = [1, 2]
        const array = originalArray._map((a) => a)
        expect(array).not.toBe(originalArray)
        expect(array).toEqual(originalArray)
        expect(array.length).toBe(2)
    })
})

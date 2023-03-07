import './index'

describe('For each function', () => {
    test('Callback function if executed for each array item', () => {
        const fn = jest.fn(() => {})
        const array = [1, 2, 3]
        array._forEach(fn)
        expect(fn).toBeCalledTimes(array.length)
    })

    test('No callback function if executed if array is empty', () => {
        const fn = jest.fn(() => {})
        const array: number[] = []
        array._forEach(fn)
        expect(fn).not.toBeCalled()
    })
})

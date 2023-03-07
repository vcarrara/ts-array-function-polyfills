import './index'

describe('Sort function', () => {
    test('Array should be sorted correctly', () => {
        const array = ['Elephant', 'Tiger', 'Zebra', 'Duck', 'Wapiti', 'Cat', 'Lion', 'Bee', 'Cow', 'Pig', 'Racoon', 'Wolf', 'Kangaroo']._sort((a, b) =>
            a.localeCompare(b)
        )
        expect(array).toEqual(['Bee', 'Cat', 'Cow', 'Duck', 'Elephant', 'Kangaroo', 'Lion', 'Pig', 'Racoon', 'Tiger', 'Wapiti', 'Wolf', 'Zebra'])
    })
})

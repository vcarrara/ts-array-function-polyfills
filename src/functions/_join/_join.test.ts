import './index'

describe('Join function', () => {
    test('If no seperator is given, a comma should be used', () => {
        const string = ['Hello', 'There', '!']._join()
        expect(string).toEqual('Hello,There,!')
    })

    test('If separator is an empty string, all elements are joined without any characters in between them', () => {
        const string = ['Hello', 'There', '!']._join('')
        expect(string).toEqual('HelloThere!')
    })

    test('If array is empty, an empty string is returned', () => {
        const string1 = []._join()
        const string2 = []._join('')
        const string3 = []._join(' ')
        expect(string1).toEqual('')
        expect(string2).toEqual('')
        expect(string3).toEqual('')
    })

    test('Sparse arrays should be handled as undefined', () => {
        const string = ['Hello', , 'There', , undefined, '!']._join()
        expect(string).toEqual('Hello,,There,,,!')
    })

    test('Nested arrays should be joined recursively', () => {
        const string = ['I', 'am', ['a', ['very', ['nested', 'array']]]]._join(' ')
        expect(string).toBe('I am a very nested array')
    })

    test('Objects should be stringified during the join', () => {
        class Foo {}
        Foo.prototype.toString = function () {
            return 'DummyClass'
        }

        class Bar {}

        const string = ['Hello', { an: 'object' }, new Foo(), new Bar()]._join(' ')

        expect(new Foo().toString()).toBe('DummyClass')
        expect(new Bar().toString()).toBe('[object Object]')
        expect({ an: 'object' }.toString()).toBe('[object Object]')
        expect(string).toEqual('Hello [object Object] DummyClass [object Object]')
    })
})

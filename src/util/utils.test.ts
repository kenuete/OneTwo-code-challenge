import { expandString } from './utils'

// 2a3bc
// 3a2b4cd

describe('expandString', () => {
    test('when single digit and single character', () => {
        expect(expandString('2a')).toBe('aa')
    })
    test('when single digit and single character combination repeated', () => {
        expect(expandString('2a3b')).toBe('aabbb')
    })
    test('when single digit and multi character', () => {
        expect(expandString('4cd')).toBe('cdcdcdcd')
    })
    test('when multi digit and multi character', () => {
        expect(expandString('10cd')).toBe('cdcdcdcdcdcdcdcdcdcd')
    })         
})
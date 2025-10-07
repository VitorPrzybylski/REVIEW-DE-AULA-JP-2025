import { describe, it, expect } from '@jest/globals'
import ServiceTemperatura from '../src/services/temperatura.js'

describe('Testando a converçao Cel para Fah'), () => {

    it("testando valor zero"), () => {
        const fah = ServiceTemperatura.convertCelToFah(0)
        expect(fah).toBe(32)
    }
    it("testando com 10"), () => {
        const fah = ServiceTemperatura.convertCelToFah(10)
        expect(fah).toBe(50)
    }
}

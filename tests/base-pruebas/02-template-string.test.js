import { getSaludo } from '../../src/base-pruebas/02-template-string';


describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe retornar "Hola Matias"', () => {

        const name = 'Matias';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}!!!`)


     });
});
import { usContext } from '../../src/base-pruebas/06-deses-obj';


describe('Prueba en 06-deses-obj', () => {
    test('UsContex debe retornar un objeto', () => {
        const clave = 'Hombre ojalata';
        const edad = 35;

        const prueba = usContext({ clave, edad });

        expect(prueba).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })


    });
});
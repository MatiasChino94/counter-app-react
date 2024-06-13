import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

import heroes from '../../src/data/heroes.js';


describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un heroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id)

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })

    });

    test('getHeroeById debe retornar undefained sino existe el heroe', () => {

        const id = 100;
        const hero = getHeroeById(id)

        expect(hero).toBeFalsy();

    });

    //TAREA
    //debe de retornar un arreglo con los heroes de DC
    //length === 3
    //toEqual al arreglo filtrado

    //debe retornar un arreglo con los heroes de Marvel
    //length === 2

    test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const hero = getHeroesByOwner(owner);

        //expect(hero).toEqual([
            //{ id: 1, name: 'Batman', owner: 'DC' },
            //{ id: 3, name: 'Superman', owner: 'DC' },
            //{ id: 4, name: 'Flash', owner: 'DC' }
        //]);

        //expect(hero.length).toBe(3);

        //el ideal
        expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === owner));

    });

    test('getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);

        // expect(hero).toEqual([
        //     { id: 2, name: 'Spiderman', owner: 'Marvel' },
        //     { id: 5, name: 'Wolverine', owner: 'Marvel' }
        // ])

        // expect(hero.length).toBe(2)

         //el ideal
         expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === owner));

    });




});
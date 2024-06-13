import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {


    // test('debe de hacer match con el snapshot', () => { 

    //     const title = 'Hola, soy Matias'
    //     const { container } = render( <FirstApp title={title}/> );

    //     expect( container ).toMatchSnapshot();


    // });

    test('debe de mostrar el tittulo en un h1', () => {

        const title = 'Hola, soy Matias'
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy();


        //otra forma
        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toBe( title );
        // tambien puede ser asi 
        //expect(h1.innerHTML).toContain( title );

        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('debe mostrar el subtitulo enviado por props', () => {

        const title = 'Hola, soy Matias';
        const subtitle = 'soy un subtitulo';
        const { getAllByText } = render(<FirstApp
            title={ title }
            subtitle={ subtitle }
        />
        );

        expect(getAllByText(subtitle).length).toBe(2);

    });
});
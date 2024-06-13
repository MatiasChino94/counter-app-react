import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en el <CounterApp />', () => { 

    const initialValue = 10

    test('Debe hacer match con el snapshot', () => {  

        const { container } = render(<CounterApp value={ initialValue } /> );
        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrar el valor inicial de 100 <CounterApp value={100} />', () => {  

        render(<CounterApp value={100} /> );
        expect( screen.getByText(100) ).toBeTruthy();

    });

    test('debe de incrementar con el boton +1 ', () => {

        render(<CounterApp value={initialValue} /> );
        fireEvent.click( screen.getByText('+1') );
        expect(screen.getByText('11')).toBeTruthy();


    });

    test('debe decrementar con el boton -1 ', () => {

        render(<CounterApp value={initialValue} /> );
        fireEvent.click( screen.getByText('-1') );
        expect(screen.getByText('9')).toBeTruthy();


    });

    test('debe de resetear con el boton reset', () => {

        render(<CounterApp value={initialValue} /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );

        //otra manera de tomar el boton 
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));


        //fireEvent.click( screen.getByText('Reset'));

        expect(screen.getByText(initialValue)).toBeTruthy();


    });



});
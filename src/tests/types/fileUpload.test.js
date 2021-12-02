import { fileUpload } from '../../helpers/fileUpload';

describe( 'Pruebas en fileUpload', () => {


    test('Debe de cargar un arhivo y retornar un URL ', async () => {
        const resp = await fetch('https://media.istockphoto.com/photos/international-day-for-the-remembrance-of-the-slave-trade-and-its-picture-id1277329816?b=1&k=20&m=1277329816&s=170667a&w=0&h=ZxaJzdlYLCk9Oj5PrOJTqMAztOr_awkYM0hrTvSRBOE=');

        const blob = await resp.blob();

        const file = new File( [ blob ], 'foto.png' );

        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');


    });





});
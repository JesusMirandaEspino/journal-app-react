import { fileUpload } from '../../helpers/fileUpload';


import  cloudinary from 'cloudinary';

cloudinary.config({
    cloud_name: 'eternoagradecido',
    api_key: '756413499761247',
    api_secret: 'GKtuJzOPCC2O4coNykBOZyAcarM',
    secure: true
});


describe( 'Pruebas en fileUpload', () => {


    test('Debe de cargar un arhivo y retornar un URL ', async () => {
        const resp = await fetch('https://media.istockphoto.com/photos/international-day-for-the-remembrance-of-the-slave-trade-and-its-picture-id1277329816?b=1&k=20&m=1277329816&s=170667a&w=0&h=ZxaJzdlYLCk9Oj5PrOJTqMAztOr_awkYM0hrTvSRBOE=');

        const blob = await resp.blob();

        const file = new File( [ blob ], 'foto.png' );

        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

        //Borrar Imagen
        const segments = url.split('/');

        const folderName = "nombrecarpeta";

        const imgId = segments[ segments.length -1 ].replace( '.jpg', '' );

        await cloudinary.v2.api.delete_resources(`${folderName}/${imgId}`, {},  () => {
            //done();
        });

    });



    test('Debe de retonar un error ', async () => {


        const file = new File( [], 'foto.png' );

        const url = await fileUpload( file );

        expect( url ).toBe(null);


    });


});
const { envs } = require('./config/env');
const { startServer } = require('./server/server');


const main = () => {
    startServer(
        {
            port: envs.PORT,
            public_Path: envs.PUBLIC_PATH
        }
    );
};

//Funcion agnostica auto convocada
( async () => {
    main(); 
})();
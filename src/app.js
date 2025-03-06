import { envs } from './config/env.js';
import { startServer } from './server/server.js';


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
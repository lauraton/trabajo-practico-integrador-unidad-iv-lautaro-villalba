
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('movies','root','',{
    host:"localhost",
    dialect:"mysql",
});

export const startDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false });
        console.log('Conexión a la bd lista');
    } catch (error) {
        console.error('No se pudo conectar a la db:', error);
    }
}
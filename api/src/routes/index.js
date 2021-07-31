const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
    const apiUrl = await axios.get('https://restcountries.eu/rest/v2/all')
    const apiInfo = await apiUrl.data.map(el => {
        return {
            name : el.name,
            flag: el.flag,
            region: el.region,
            capital: el.capital,
            subregion: el.subregion.map(el => el),
            area: el.area,
            appearance: el.appearance.map(el => el)
        };
    });
    return apiInfo;



module.exports = router;

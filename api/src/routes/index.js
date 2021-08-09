const { Router } = require('express');
const {Country, Activity} = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');

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
            subregion: el.subregion,
            area: el.area,
            population: el.population,
            alpha3Code: el.alpha3Code
        };
    });
    return apiInfo;
}
// const getDbInfo = async () => {
//     return await Country.findAll({
//         include:{
//             model: Activity,
//             attributes: ['name'],
//             through: {
//                 attributes: []
//             },
//         }
//     })

// }
const getAllCountries = async () =>{
    const apiInfo = await getApiInfo();
    // const dbInfo = await getDbInfo();
   
    // const infoTotal = apiInfo.concat(dbInfo);
    return apiInfo
}


router.get('/countries', async (req,res)=>{
    const name = req.query.name
    let countriesTotal = await getAllCountries();
    if (name) {
        
        let countryName = await countriesTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        console.log(countryName)
        if(countryName.length){
            return res.status(200).send(countryName)
        } else{
            return res.status(404).send('The country is not found');
        }
        
     } else {
        
         countriesTotal.map( (e) =>{
            Country.findOrCreate({where: {name: e.name,
                                            flag: e.flag,
                                            region: e.region,
                                            capital: e.capital,
                                            subregion: e.subregion,
                                            area: e.area,
                                            population: e.population,
                                            alpha3Code: e.alpha3Code}})
         })
        

    }
    return res.status(200).send(countriesTotal)
})

router.post('/activity', async (req,res) => {
    const {
name,
difficulty,
duration,
season,
country
} = req.body

let activityCreated = await Activity.create ({
        name,
        difficulty,
        duration,
        season
        
    })
    let activityDb = await Activity.findAll({
        where: { name: name}

    })
    let countryArg
    await country.map(async (e) => {
        countryArg = await Country.findOne({where: {name: e}})
        console.log(countryArg)
        console.log(activityDb)
        countryArg.addActivity(activityDb)
        
    })
    
    res.send('Activity created successfully')
})

router.get('/activities', async (_req,res) => {
        let activityDb = await Activity.findAll({
        include: [{model: Country, require:true}]
    })
    res.send(activityDb)

})
router.get('/countries/:id', async (req,res) => {
    const id = req.params.id;
    const countriesTotal = await getAllCountries()
    if (id){
        let countryId = await Country.findOne({where: {alpha3Code: id}, include: [{model: Activity}]})
        console.log(countryId)
        countryId?
        res.status(200).send(countryId) :
        res.status(404).send('That country is not found')
    }
    
})
module.exports = router;

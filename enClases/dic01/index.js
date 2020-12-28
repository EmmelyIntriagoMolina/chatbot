//librerias instaladas
const mongoose = require('mongoose');
const axios = require('axios').default;
const cheerio = require('cheerio')
const cron =  require('node-cron')
//componentes locales
const { MONGO_URI } = require('./config')
const { Noticias } = require('./models')

//conectarnos a nuestra base de datos ORM
mongoose.connect(MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true })
.then(p=>{
    console.log('conexion exitosa')
}).catch(err=>{
    console.log('Error de conexión',err);
}) ;

//debemos definir la periodicidad utilizando CRON EXPRESSION
cron.schedule("* * * * * *", async ()=>{

    // 1.acceder a nuestra URL de CNN para tomar el HTML con AXIOS
    const html=  await axios.get("https://cnnespanol.cnn.com/") ;

    //2. Procesar ese HTML utilizando CHEERIO y recorrer las noticias
    const $ = cheerio.load(html.data);

    //console.log(html.data)

    //obeniendo todos los elementos que pertenecen a la clase news__title
    const titulos = $(".news__title");
    titulos.each((index, element)=>{

        //3.almacenar la informaciOn en mongodb utilizando MONGOOSE
        const noticia = {
            titulo: $(element).text().toString()   ,
            enlace: $(element).children().attr("href")
        }
        Noticias.create([noticia]);
    })
    console.log('Proceso terminado')
})


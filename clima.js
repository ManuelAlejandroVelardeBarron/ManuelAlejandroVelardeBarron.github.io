const apiKey='e5b6ba975e107669a7f23789d568107a';

const locationInput=document.getElementById('location');
const btnBuscar=document.getElementById('location');
const Temperaturalabel=document.getElementById('location');
const descriptionlabel=document.getElementById('location');
const iconoClima=document.getElementById('location');

btnBuscar.addEventListener('click',buscadorClima);
function buscarDatosClimas(){
    const location=locationInput.value;
    fetch('https://apli.weatherapi.com/v1/current.json?key=${apikey}&lang=es&q=${encodeURIComponet(location)}');
    then(Response=> Response.json())
    .then(data=>{
        const{ location,current}=data;
        const temperatura=current.temp_c;

        Temperaturalabel.textContent='${temperatura}°C';
        descriptionlabel.textContent= current.condition.text;
    })
    .catch(error=>{
        console.log('Error al obtener los datos del clima: ',error);
    })
}
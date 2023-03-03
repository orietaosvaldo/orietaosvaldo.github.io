url = 'https://randomuser.me/api/';


fetch(url)
.then(res => res.json())
.then(data => {

    //colcar foto en pantalla
const foto1=JSON.stringify(data.results[0].picture.medium);
const foto2 = JSON.parse(foto1);
const img = document.querySelector('img');
img.src = foto2;

    //datos

nombre.innerHTML=data.results[0].name.title+" "+data.results[0].name.first+" "+data.results[0].name.last;
mail.innerHTML=data.results[0].email;
dire.innerHTML=data.results[0].location.street.name+" "+data.results[0].location.street.number;
cel.innerHTML=data.results[0].cell;
pais.innerHTML=data.results[0].location.country;


});
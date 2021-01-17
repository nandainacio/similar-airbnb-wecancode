const estado = document.getElementById('estadosEscolha');
const cidade = document.getElementById('cidades');
const data = document.getElementById('data');
const botaoData = document.getElementById('botaoData');
const tituloData = document.getElementById('titData');

function confirmarCidade(){
    if(estado.value === "" || cidade.value === ""){
        alert('Escolha o estado e digite a cidade desejada')
    }else{
        data.classList.remove('escondido');
        botaoData.classList.remove('escondido');
        tituloData.classList.remove('escondido');
    }
}

function get(url){
    const request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}



function confirmarData(){
    const data = get('https://dry-cliffs-94979.herokuapp.com/');
    const quartos = JSON.parse(data);
  
    

    quartos.forEach(property =>{
        const {name, photo, price, property_type} = property;
       
        cardInfo = document.createElement("div");
        cardInfo.className = "card-info";

        card = document.createElement('div');
        card.className = 'card';

        cardImg = document.createElement('img');
        cardImg.className = 'card-img';
        cardImg.src = photo;

        propertyPrice = document.createElement('div');
        propertyPrice.className = 'property_price';
        propertyPrice.innerHTML = `R$ ${price.toFixed(2)}/noite`;

        propertyType = document.createElement('div');
        propertyType.className = 'property-type';
        propertyType.innerHTML = property_type;
        
        propertyName = document.createElement('div');
        propertyName.className = 'property-name';
        propertyName.innerHTML = name;

        feedCards.appendChild(card);
        cardInfo.appendChild(propertyName);
        card.appendChild(cardImg);
        cardInfo.appendChild(propertyPrice);
        card.appendChild(cardInfo);
        cardInfo.appendChild(propertyType);
        

    });
}


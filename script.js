const inputText=document.querySelector('#input-text');
const btn=document.querySelector('#btn');
const result=document.querySelector('.result')

btn.addEventListener('click',async (e)=>{
    e.preventDefault();

    const inputElement=inputText.value;
    console.log(inputElement);

    if(inputElement.length==""){
        result.innerHTML=`<h2>Please Enter a country name</h2>`
    }
    else{
       const finalURL = `https://restcountries.com/v3.1/name/${inputElement}?fullText=true`;
       try {
        
       const information= await fetch(finalURL);
       const data=await information.json();

       console.log(data);
       result.innerHTML=
       `<div class=img>
       <img src=${data[0].flags.png} class="flag-img">
       <h2>${data[0].name.common}</h2>
       </div>
       <div class="about">
       <strong>Capital: </strong><span>${data[0].capital}</span>
       <br>
       <strong>Continent: </strong><span>${data[0].continents}</span>
       <br>
       <strong>Area: </strong><span>${data[0].area}</span>
       <br>
       <strong>Population: </strong><span>${data[0].population}</span>
       <br>
       <strong>Common Language: </strong><span>${Object.values(data[0].languages).toString()}</span>
       </div>
       `
       } catch (error) {
        result.innerHTML=`<h2>Please Enter a valid Country Name or Check Internet Connection</h2>`
       }
    }
    

    
})
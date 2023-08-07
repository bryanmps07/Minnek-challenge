const API_URL = 'https://dog.ceo/api';

const HTMLResponse = document.querySelector('#dog-list');

fetch(`${API_URL}/breeds/list/all`)
.then((response) => response.json())
.then((breeds) => {

    //Create a Array of objects
    const data = Object.entries(breeds.message).map(([breed, subBreeds]) => { return {breed, subBreeds}}); 

    data.forEach((breeds) => {

        //To get ramdon pictures of breeds
        fetch(`${API_URL}/breed/${breeds.breed}/images/random`)
        .then(response => response.json())
        .then(imgs => {

            //HTML Elements
            let article = document.createElement("article");
            let divImg = document.createElement("div");
            let img = document.createElement("img");
            let divName = document.createElement("div");
            
            article.className = "dog";

            //Sub breeds
            if(Array.isArray(breeds.subBreeds) && breeds.subBreeds.length > 0) {

                let ul = document.createElement("ul");
                
                breeds.subBreeds.forEach((sub) => {
                    let li = document.createElement("li");
                    li.appendChild(
                        document.createTextNode(`${sub}`)
                    );
                    ul.appendChild(li);
                });
                divImg.appendChild(ul)                
            }

            img.setAttribute("alt", `${breeds.breed}`);
            img.src = imgs.message;
            
            divImg.className = "image";            
            divImg.appendChild(img);
            
            divName.className = "name";
            divName.appendChild(document.createTextNode(`${breeds.breed}`));
    
            article.appendChild(divImg);
            article.appendChild(divName);
            
            HTMLResponse.appendChild(article);
        });
        
    });

});
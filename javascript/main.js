// this will controll the click on the button 
document.querySelector(".js-go").addEventListener('click' , function(){
    // let input  = document.querySelector("input").value
    let userInput = getUserInput();
    userInput.innerHTML=""
     searchGiphy(userInput);
})
 
//this will control if the user press enter
document.querySelector(".js_userinput").addEventListener('keyup' , function(e){
     // if the key enter is clicked the run the code.....
    if(e.which === 13){
        let userInput = getUserInput();
        searchGiphy(userInput);
        }
})

function getUserInput(){
    let userinput = document.querySelector('.js_userinput').value;
    return userinput
}


function searchGiphy(searchQuery){
let url =  "https://api.giphy.com/v1/gifs/search?api_key=l7c15HWBPHG0YKozQGSgk4J8CJl2JS7Z&q= "+ searchQuery +" &limit=25&offset=0&rating=g&lang=en"
// AJAX Request 
 let GiphyAJAXCall = new XMLHttpRequest();
 GiphyAJAXCall.open('GET' , url);
 GiphyAJAXCall.send();

 GiphyAJAXCall.addEventListener('load', function(data){
   let actualData =  data.target.response
     pushToDom(actualData);
})
}
 


function pushToDom(input){
    // turn response into real javascript object 
  let response =  JSON.parse(input);
//   drill down to the data array 
  let imgurls = response.data;
  //  find the container to hold this stuff in dom 
 let container =  document.querySelector(".js-container");
// clear it of old content since this function will be used on every search 
// we want to reset the div 
 container.innerHTML = " ";

//    loop through data array and add img html 
  imgurls.map((img)=>{
    // find img src 
 let imgs = img.images.fixed_height.url
 
//  concatenate a new img tag 
 container.innerHTML += "<img src =\""+imgs +"\" >";

  })

  
}


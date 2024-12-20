const getQuote = $("#getQuote");
const quoteImg = $("#quoteImg");
const quoteAuthor = $("#quoteAuthor");
const quoteText = $("#quoteText");
const getDrink = $("#getDrink");
const drinkTitle = $('#drinkTitle');
const drinkIngrdnts = $('#ingredients');
const drinkMeasure = $('#measure');
const drinkImg = $('#drinkImg');
const drinkStructions = $('#instructions');
const getFact1 = $('#getFact1');
const getFact2 = $('#getFact2');
const getFact3 = $('#getFact3');
const getFact4 = $('#getFact4');
const getFact5 = $('#getFact5');
const getMeow1 = $("#getMeow1");
const getMeow2 = $("#getMeow2");
const getMeow3 = $("#getMeow3");
const getMeow4 = $("#getMeow4");
const getMeow5 = $("#getMeow5");
console.log(getQuote)
getQuote.on("click",function() {
    let url1="https://api.breakingbadquotes.xyz/v1/quotes"
    console.log("Starting request...")
    fetch(url1)
    .then((response)=>response.json())
    .then((data1)=>{
        let url2="https://www.googleapis.com/customsearch/v1?key=AIzaSyAgb83vPp_y7IZz60DMwM3yuGdFmhd3QvM&cx=4349f99fee6ed45d7&q="+data1[0].author;
        quoteAuthor.text(data1[0].author)
        quoteText.text(data1[0].quote)
        fetch(url2)
            .then((response)=>response.json())
            .then((data2)=>{
                console.log(data2)
                if (data1[0].author==="Tio Salamanca")
                    quoteImg.attr("src",data2.items[0].pagemap.cse_image[0].src)
                if (data1[0].author==="The fly")
                    quoteImg.attr("src", data2.items[5].pagemap.cse_image[0].src)
                else
                    quoteImg.attr("src",data2.items[1].pagemap.cse_image[0].src)
                 console.log("Data was fetched")
            })
            .catch((err1)=>{
                console.log("Data could not be retrieved.. :(")
                console.log(err1)
                console.log("Request Finished!")
            })
    })
    .catch((err2)=>{
        console.log("Data could not be retrieved.. :(")
        console.log(err2)
        console.log("Request Finished!")
    })
})
getDrink.on("click",function(e) {
    drinkIngrdnts.empty();
    drinkMeasure.empty();
    let url1="https://www.thecocktaildb.com/api/json/v1/1/random.php"
    console.log("Starting request...")
    fetch(url1)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        let drinkArray = data.drinks[0];
        console.log(drinkArray);
        drinkImg.attr("src", drinkArray.strDrinkThumb)
        drinkTitle.text(drinkArray.strDrink)
        drinkStructions.text(drinkArray.strInstructions)
        for (let key in drinkArray){
            for (let i=1; i<=15; i++){
                if (key=="strIngredient"+i)
                    if (drinkArray[key]!==null){
                        drinkIngrdnts.append('<li class="list-group-item">'+drinkArray[key]+'</li>')
                    }
                if (key=="strMeasure"+i)
                    if (drinkArray[key]!==null)
                        drinkMeasure.append('<li class="list-group-item">'+drinkArray[key]+'</li>');
            }
        }
    })
    .catch((err)=>{
        console.log("Data could not be retrieved.. :(")
        console.log(err)
        console.log("Request Finished!")
    })
})
getFact1.on("click",getCatFact)
getFact2.on("click",getCatFact)
getFact3.on("click",getCatFact)
getFact4.on("click",getCatFact)
getFact5.on("click",getCatFact)
function getCatFact() {
    let url1="https://cat-fact.herokuapp.com/facts"
            console.log("Starting request...")
            fetch(url1)
            .then((response)=>response.json())
            .then((data)=>{
                for (let i=0; i<5; i++){
                    $('#factText'+(i+1)).text(data[i].text)
                    let url2="https://api.thecatapi.com/v1/images/search"
                        console.log("Starting request...")
                        fetch(url2)
                        .then((response)=>response.json())
                        .then((data2)=>{
                            $('#catImg'+(i+1)).attr("src", data2[0].url);
                        })
                        .catch((err2)=>{
                            console.log("Data could not be retrieved.. :(")
                            console.log(err)
                            console.log("Request Finished!")
                        })
                }
            })
            .catch((err)=>{
                console.log("Data could not be retrieved.. :(")
                console.log(err)
                console.log("Request Finished!")
            })
}
getMeow1.on("click",getMeowFact)
getMeow2.on("click",getMeowFact)
getMeow3.on("click",getMeowFact)
getMeow4.on("click",getMeowFact)
getMeow5.on("click",getMeowFact)
function getMeowFact() {
    let url1="https://meowfacts.herokuapp.com/?count=5"
            console.log("Starting request...")
            fetch(url1)
            .then((response)=>response.json())
            .then((data)=>{
                for (let i=0; i<5; i++){
                    $('#meowText'+(i+1)).text(data.data[i])
                    let url2="https://api.thecatapi.com/v1/images/search"
                        console.log("Starting request...")
                        fetch(url2)
                        .then((response)=>response.json())
                        .then((data2)=>{
                            $('#meowImg'+(i+1)).attr("src", data2[0].url);
                        })
                        .catch((err2)=>{
                            console.log("Data could not be retrieved.. :(")
                            console.log(err)
                            console.log("Request Finished!")
                        })
                }
            })
            .catch((err)=>{
                console.log("Data could not be retrieved.. :(")
                console.log(err)
                console.log("Request Finished!")
            })
}
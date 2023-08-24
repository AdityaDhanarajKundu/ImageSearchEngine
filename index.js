const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreButton = document.getElementById("show-more-btn");

const apiKey = "sFu1bqGnyhBQABFoMdOlePw6MFkqXWp9EgfzIwGCFP0";
let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    let apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}`;

    try {
        let data = await fetch(apiUrl).then(respose=>{
            return respose.json();
        });
        console.log(data);

        const resultImages = data.results;
        resultImages.map((result)=>{
            //creating the image element
            const image = document.createElement("img");
            image.src = result.urls.small;
        })

    } catch (error) {
        console.error(error);
    }
}

searchForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    page = 1;
    searchImages();
})
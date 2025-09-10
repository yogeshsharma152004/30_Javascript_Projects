const accessKey = "qvpekq7OJefwUicvMnRTc-KIGLRFa62AckCQ99y_lBs";


const searchForm = document.getElementById("search");

const searchBox = document.getElementById("box");

const searchResult = document.getElementById("search-result");

const btn = document.getElementById("show-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;

    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12` ;


    const response = await fetch(url);

    const data = await response.json();

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");

        image.src = result.urls.small;

        const imgLink = document.createElement("a");

        imgLink.href = result.links.html
        imgLink.target = "_blank";


        imgLink.appendChild(image);

        searchResult.appendChild(imgLink);
    })

    btn.style.display = "block";
}

searchForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

btn.addEventListener("click" , () => {
     page++;
     searchImages();
})


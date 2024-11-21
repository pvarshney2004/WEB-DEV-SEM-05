const form = document.getElementById("movieForm");

const movieContainer = document.getElementById("container");

localStorage.setItem("movie","spiderman");

let movie = localStorage.getItem("movie");
console.log(movie);

const createMovieElement = (movies)=>{
    for(let movie of movies){
        const div = document.createElement("div");
        div.setAttribute("class","singleMovie");
        const banner = document.createElement("img");
        banner.className = "banner";
        banner.setAttribute("src",movie.show.image.original);
        let summary = movie.show.summary.slice(0,100);
        if(movie.show.summary.length>100){
            summary+="...";
        }
        div.innerHTML = `<h2>${movie.show.name} </h2> <p>${movie.show.rating.average}</p> ${summary}`;
        div.prepend(banner);
        movieContainer.append(div);
    }
}

const getMovies = async (search)=>{
    let res = await fetch(`http://api.tvmaze.com/search/shows?q=${search}`);
    let data = await res.json();
    localStorage.setItem("movies",data);
    createMovieElement(data);
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let ele = e.target.children[0].value;
    getMovies(ele);
});



// console.log(form.parentElement)
// console.log(form.nextElementSibling);
// console.log(form.previousElementSibling);

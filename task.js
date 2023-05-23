class movie{
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;

    }

    getPG(movies){
        var output = movies.filter((movie)=>{
            return movie.rating === this.rating;
        })
        return output;

    }
}

var movieobj = new movie("iron man","marvel studio");
var result = movieobj.getPG(movies);
console.log(result);

var movieobj = new movie("spiderman","marvel studio", "PG13");
var result = movieobj.getPG(movies);
console.log(result);



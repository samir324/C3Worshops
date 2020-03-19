function addFavoriteBook(bookName) {

    var favoriteBooks = ["BOOK1", "BOOK2", "BOOK3"];
    var bookName = favoriteBooks.includes("Great")

    if (bookName == false) {
        favoriteBooks.push("Great");
    } else {
        console.log("It already exists");
    }
    for(let i=0; i <num; i++){
        favoriteBooks[i] =String(favoriteBooks[i]); // forsé tout les element du favoriteBooks est converté string 
        console.log(typeof favoriteBooks[i] );
    }
    function  printFavoriteBooks(){
        var num = favoriteBooks.length;
        console.log('livres  favoris:' + '' + num );
        for(let element of favoriteBooks){
            console.log(element);
        }
        // for(let i=0; i <num; i++){
        //     console.log(favoriteBooks[i]);
        // }
    }printFavoriteBooks()
}addFavoriteBook()












   
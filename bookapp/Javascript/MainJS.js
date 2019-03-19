//var allTheBooks= data.books   
var url = "https://api.myjson.com/bins/udbm5";



           var booksArr;
           fetch(url, {
               mode:"cors"
           })
           .then(function (response) {
               return response.json()
           })
           .then(function (booksJson) {
               console.log(booksJson)
               allTheBooks = booksJson.books
               app.allBooks = booksJson.books
           })
           .catch(error => console.log(error))
       



var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    allBooks: data.books,
    theTitles:[],
    search:""
  },
    methods: {
        showMeTheTitles(){
            var theTitles1=[]
            for (var i = 0; i < allTheBooks.length; i ++){
                if(allTheBooks[i].titulo == 'string'){
                }
                 theTitles1.push(allTheBooks[i].titulo)  
            }
                console.log(theTitles1)
                console.log("itistrue")
           app.theTitles =theTitles1
        },
        englishBooks(){
            var theEnglishBooks = []
            for (var i = 0; i < allTheBooks.length; i ++){
                if(allTheBooks[i].idioma == "en"){  
                
                theEnglishBooks.push(allTheBooks[i])}
            }
            console.log(theEnglishBooks)
            app.allBooks=theEnglishBooks
        },
         spanishBooks(){
            var theSpanishBooks = []
            for (var i = 0; i < allTheBooks.length; i ++){
                if(allTheBooks[i].idioma == "es"){  
                
                theSpanishBooks.push(allTheBooks[i])}
            }
            console.log(theSpanishBooks)
             app.allBooks=theSpanishBooks
        },
        
        englishAndSpanishBooks(){
            var bothBooks = data.books
            app.allBooks = bothBooks
        },
        
        orderByAlpha(){
            var aplhaOrder = allTheBooks.sort((a,b) => {
                return a.titulo-b.titulo
            
        })
                console.log(aplhaOrder)
        },
    },
    computed:{
    filteredBooks: function(){
    return this.allBooks.filter((Books)=>{
    return Books.titulo.toLowerCase().match(this.search.toLowerCase());
})
}
}




})





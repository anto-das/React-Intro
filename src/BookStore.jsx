 import Books from "./Book"
 
 export default function BookStore({books}){
    // console.log(books)
    return (
        <div>
            <h3>Books:{books.length}</h3>
            {
                books.map(book=> <Books book={book}></Books>)
            }
        </div>
    )
}
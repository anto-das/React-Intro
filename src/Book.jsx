 
 import './Book.css'
 export default function Books({book}){
    const {name,price} =book;
    return (
        <div className='Book'>
            <h3>Book Name:{name}</h3>
            <p>Price:{price}</p>
        </div>
    )
}
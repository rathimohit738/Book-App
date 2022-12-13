import React ,{useState} from 'react';
import Card from './Card';
import axios from 'axios';

const Main=()=>{
    const [ search,setSearch]=useState("");
    const [bookData,setData] = useState([]);
    const searchBook=(evt)=>{
        if(evt.key === "Enter")
        {
          axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
        .then(res =>setData(res.data.items))
        .catch(err=>console.log(err))
        }
    }  


  return (
    <>
    <div className='header'>
         <div className='row1'>
            <h1> a room without books is like<br/> a body without a soul</h1>
        </div>
        <div className='row2'>
            <h2> find your book</h2>
            <div className='search'>
                <input type ="text" placeholder='enter your book name'
                value ={search} onChange={e=>setSearch(e.target.value)} 
                 onKeyPress={searchBook}/>
                <button><i className="fas fa-search"></i></button>
            </div>
        <img src="./images/dg2.png " alt =""/>
    </div>
    </div>
     <div className ='container' >
   {
   <Card book={bookData}/>
   }
    </div>
</>
  )
}

export default Main;
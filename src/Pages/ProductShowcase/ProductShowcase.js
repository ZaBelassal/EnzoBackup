import React , {useState ,useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom'
import './ProductShowcase.css'
import inventory from '../../data/inventory'
import {useDispatch} from 'react-redux'
import { ADDITEM } from '../../redux/types';

function ProductShowcase() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const productClicked = inventory.findIndex(obj =>obj.title.replace(/\s+/g,"").trim()===id)
  const [nbMugs,setNbMugs] = useState(1)
  const updateMugs = (e) => {
    setNbMugs(e.target.value)
  }
  
  //Refercene pour le texte 
  const addingInfo = useRef()
  //Pour changer le state pour afficher le message d'ajout au panier 
  let display = true 
  let timerInfo;

  //addToCart pour envoyér notre action
  const addToCart = (e) => {
    e.preventDefault();
    const itemAdded = {
      ...inventory[productClicked],
      quantity:nbMugs
    }
    dispatch({
      type:ADDITEM,
      payload:itemAdded
    })
    // Text ajouté 
  addingInfo.current.innerText = "Ajouté au panier "

    //Enlever le text avec un state display
    if(display){
      display=false
      timerInfo=setTimeout(()=>{
        addingInfo.current.innerText=""
        display=true
      },1000)
    }

  }
  

  useEffect(()=> {
    return ()=> {
      clearTimeout(timerInfo)
    }
  },[])


  return (
  <div className='showcase'>
      <div className="container-img-showcase">
          <img 
          className='img-showcase'
          src={process.env.PUBLIC_URL+`/images/${inventory[productClicked].img}.png`} alt="" />
      </div>
      <div className="product-infos">
          <h2>{inventory[productClicked].title}</h2>
          <p>Prix: {inventory[productClicked].price} €</p>
          <form onSubmit={addToCart}>
              <label htmlFor="quantity">Quantité</label>
              <input 
              type="number"
              id="quantity"
              value={nbMugs}
              onChange={updateMugs}/>
              <button>Ajouter Au panier</button>
              <span
              ref={addingInfo} 
              className="adding-infos"></span>
          </form>
      </div>
  </div>
  );
}

export default ProductShowcase;

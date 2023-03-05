import React from 'react'
import Card from './Card'
import Navbar from './Navbar'
import { homeStyle } from './componentes/homeStyle'




const Home = () => {
    let pizzas =[
        {id: 1, tipo: "Muzarella", precio:"1200",img:"https://rankea.com.ar/wp-content/uploads/2019/05/pizza-muzzarella.jpg"},
        {id: 1, tipo: "Fugazzeta", precio:"1400",img:"https://cocinerosargentinos.com/content/recipes/500x500/recipes.12050.jpeg"},
        {id: 1, tipo: "Calabresa", precio:"1600",img:"https://www.recetas-argentinas.com/base/stock/Recipe/43-image/43-image_web.jpg"}
    ]
        
    
  return (
    
       <div>
          <Navbar/>
        <h1>Bienvenidos a la Camada 3</h1>
        <div style={homeStyle}>
        {pizzas.map((pizza)=><Card pizza={pizza}/>)}
        </div>
        </div>
        )}

export default Home
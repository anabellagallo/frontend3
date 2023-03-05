import React from 'react'

const Navbar = () => {
    let titulos =["Home","Catalogo","About us","Contacto"]
  return (
    <div>
         <div style={{display:'flex',flexDirection:"row", justifyContent:"space-around"}}>
            {titulos.map((titulo,index)=><p key={index}>{titulo}</p>)}
            </div>
    </div>
  )
}

export default Navbar
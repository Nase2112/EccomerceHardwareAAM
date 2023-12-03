import React from 'react'
import "../css/CarritoInfo.css"

const CarritoInfo = () => {
  return (
    <div className='carrito_info_container'>
    <section className='carrito_info'>
      <div className='carrito_card'>
        <img className='img_carrito' src="https://m.media-amazon.com/images/I/81SzNmM27EL._AC_SX679_.jpg" alt="" />
        <p> Tarjeta Gráfica NVIDIA GeForce RTX 3080 </p>
        <i class="bi bi-trash3"></i>
      </div>
      <div className='carrito_card'>
        <img className='img_carrito' src="https://m.media-amazon.com/images/I/71x2h55zNpL._AC_SX679_.jpg" alt="" />
        <p> Procesador Intel Core i7 </p>
        <i class="bi bi-trash3"></i>
      </div>
      <div className='carrito_card'>
        <img className='img_carrito' src="https://m.media-amazon.com/images/I/71zp7CMBb0L._AC_SY679_.jpg" alt="" />
        <p> Ratón inalámbrico Logitech MX Master 3 </p>
        <i class="bi bi-trash3"></i>
      </div>

    </section>
    
    </div>
  )
}

export default CarritoInfo
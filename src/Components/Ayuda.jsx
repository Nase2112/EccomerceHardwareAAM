import React from 'react'
import { useState } from 'react'
import "../css/Ayuda.css"





const Ayuda = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='ayuda_container'>
        <div className="card_container">
            <div className={isOpen ? "cardopen" : "card"}>
                <h1 className='title_card' >Realizar un pedido</h1>
                <i class="bi bi-box-seam" id='icon' ></i>
                <p>
                    Solo tenés que seleccionar todos los productos que deseas adquirir. Seguidamente, en el carrito de compras, 
                    para conocer el costo del envío colocás tu código postal en el recuadro correspondiente, elegís la mensajería de tu preferencia 
                    y debajo seleccionas la forma de pago.
                </p>
                <i class="bi bi-caret-down" onClick={() => setIsOpen(!isOpen)}></i>
            </div>
            <div className={isOpen ? "cardopen" : "card"}>
                <h1 className='title_card'>Formas de pago</h1>
                <i class="bi bi-credit-card" id='icon' ></i>
                <p>
                Contamos con dos formas de pago: a través de depósito/transferencia bancaria, con la cual obtenés el precio especial, o bien,
                a través de los métodos con los cuales podés abonar en cuotas, al precio de lista.
                </p>
                <i class="bi bi-caret-down" onClick={() => setIsOpen(!isOpen)}></i>
            </div>
            <div className={isOpen ? "cardopen" : "card"}>
                <h1 className='title_card'>Envios</h1>
                <i class="bi bi-truck" id='icon' ></i>
                <p>
                En primer lugar, para conocer el costo del envío, una vez al agregues al carrito tu compra, solo debes colocar tu código postal en el recuadro correspondiente,
                seleccionar la mensajería de tu preferencia y elegir si deseas el retiro en alguna sucursal o la entrega a domicilio.  Tené en cuenta que, para calcular el costo del envío, se toman en consideración tanto las dimensiones y peso del paquete como la distancia de la localidad de entrega.
                </p>
                <i class="bi bi-caret-down" onClick={() => setIsOpen(!isOpen)}></i>
            </div>
        </div>     

        <article className='text_bottom'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur alias iste veniam quas, accusamus quam debitis vel, aperiam distinctio cumque est amet perspiciatis mollitia dignissimos sequi repudiandae commodi pariatur explicabo?
            Ea ducimus ut nobis voluptate pariatur repudiandae corrupti, adipisci non laboriosam molestias labore impedit error, blanditiis dolorum tempore rerum dolores voluptatum maiores? Quod assumenda ipsam laboriosam unde ipsum dolor facere?
            Asperiores sit nostrum ex perspiciatis praesentium natus magni pariatur similique assumenda voluptatum? Nemo quidem porro natus quod unde expedita provident repellat, quas quis eaque tempora voluptate harum, explicabo accusantium. Reiciendis!
        </article>
    </div>
  )
}

export default Ayuda
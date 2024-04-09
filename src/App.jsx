import { useState } from 'react';
import logito from './assets/logo.png'

export const App = () => {

  const [productos, setProductos] = useState({
    tacoAlPastor: 0,
    tacoDeAsada: 0,
    tacoDeCarnitas: 0,
  });

  // Función para manejar cambios en la cantidad de productos
  const handleCantidadChange = (producto, cantidad) => {
    setProductos({ ...productos, [producto]: cantidad });
  };

  // Función para calcular el total de la venta
  const calcularTotal = () => {
    let total = 0;
    total += productos.tacoAlPastor * 2.5; // Precio del taco al pastor
    total += productos.tacoDeAsada * 3.0; // Precio del taco de asada
    total += productos.tacoDeCarnitas * 3.5; // Precio del taco de carnitas
    return total.toFixed(2);
  };

  // Función para imprimir la factura
  const imprimirFactura = () => {
    // Aquí podrías implementar la lógica para imprimir la factura
    alert('Factura impresa. Total: $' + calcularTotal());
  };

  return (
    <>
      <div className='mt-32 w-full flex justify-center items-center'>
        <div className='py-5 px-4 flex flex-col justify-center items-center border-4 shadow-lg border-lime-700 bg-orange-200 space-y-9 rounded-xl'>
          <div className=''>
            <div className='w-40 rounded-full'>
              <img src={logito} className='' alt="" />
            </div>

          </div>
          <h2 className='text-2xl font-serif'>Venta de Tacos</h2>
          <div className='space-x-4'>
            <label className=''>
            </label>Tacos al Pastor ($2.50 cada uno):
            <input
              type="number"
              className='rounded-md'
              value={productos.tacoAlPastor}
              onChange={(e) => handleCantidadChange('tacoAlPastor', parseInt(e.target.value))}
            />
          </div>
          <div className='space-x-4'>
            <label>
              Tacos de Asada ($3.00 cada uno):

            </label>
            <input
              type="number"
              className='rounded-md'
              value={productos.tacoDeAsada}
              onChange={(e) => handleCantidadChange('tacoDeAsada', parseInt(e.target.value))}
            />
          </div>
          <div className='space-x-4'>
            <label>
              Tacos de Carnitas ($3.50 cada uno):

            </label>
            <input
              type="number"
              value={productos.tacoDeCarnitas}
              className='rounded-md'
              onChange={(e) => handleCantidadChange('tacoDeCarnitas', parseInt(e.target.value))}
            />
          </div>
          <div>
            <button onClick={imprimirFactura}>Imprimir Factura</button>
          </div>
          <div>
            <h3>Total: ${calcularTotal()}</h3>
          </div>
        </div>
      </div>

    </>
  )
}
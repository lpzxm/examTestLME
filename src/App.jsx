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
        <div className='flex flex-col justify-center items-center bg-orange-200 space-y-9'>
          <div className=''>
            <div className='w-32 rounded-full'>
              <img src={logito} className='' alt="" />
            </div>
          </div>
          <h2 className='text-2xl font-serif'>Venta de Tacos</h2>
          <div>
            <label className=''>
              Tacos al Pastor ($2.50 cada uno):
              <input
                type="number"
                value={productos.tacoAlPastor}
                onChange={(e) => handleCantidadChange('tacoAlPastor', parseInt(e.target.value))}
              />
            </label>
          </div>
          <div>
            <label>
              Tacos de Asada ($3.00 cada uno):
              <input
                type="number"
                value={productos.tacoDeAsada}
                onChange={(e) => handleCantidadChange('tacoDeAsada', parseInt(e.target.value))}
              />
            </label>
          </div>
          <div>
            <label>
              Tacos de Carnitas ($3.50 cada uno):
              <input
                type="number"
                value={productos.tacoDeCarnitas}
                onChange={(e) => handleCantidadChange('tacoDeCarnitas', parseInt(e.target.value))}
              />
            </label>
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

export default App

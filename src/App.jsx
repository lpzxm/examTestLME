import { useState } from 'react';
import logito from './assets/logo.png'
import jsPDF from 'jspdf'
export const App = () => {

  const [productos, setProductos] = useState({
    tacoAlPastor: 0,
    tacoDeAsada: 0,
    tacoDeCarnitas: 0,
  });

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const nombreRegex = /^[a-zA-Z\s]*$/;

  // Función para manejar cambios en la cantidad de productos
  // const handleCantidadChange = (producto, cantidad) => {
  //  setProductos({ ...productos, [producto]: cantidad });
  // };

  const handleDecimalChange = (producto, valor) => {
    const roundedValor = parseFloat(valor).toFixed(0);
    setProductos({ ...productos, [producto]: roundedValor });
  };

  // Función para calcular el total de la venta
  const calcularTotal = () => {
    let total = 0;
    total += productos.tacoAlPastor * 2.5; // Precio del taco al pastor
    total += productos.tacoDeAsada * 3.0; // Precio del taco de asada
    total += productos.tacoDeCarnitas * 3.5; // Precio del taco de carnitas
    return total.toFixed(2);
  };

  const cleanForm = () => {
    setNombre('');
    setApellido('');
    setProductos({
      tacoAlPastor: 0,
      tacoDeAsada: 0,
      tacoDeCarnitas: 0,
    })
  }

  // Función para imprimir la factura
  const imprimirFactura = () => {
    if (calcularTotal() !== "0.00") {
      const doc = new jsPDF();
      doc.text(`Factura. Cliente: ${nombre} ${apellido}.`, 10, 10);
      doc.text('Productos:', 10, 20);
      doc.text(`- Tacos al Pastor: ${productos.tacoAlPastor}`, 10, 30);
      doc.text(`- Tacos de Asada: ${productos.tacoDeAsada}`, 10, 40);
      doc.text(`- Tacos de Carnitas: ${productos.tacoDeCarnitas}`, 10, 50);
      doc.text(`Total: $${calcularTotal()}`, 10, 60);
      doc.save('factura.pdf');
    } else {
      alert("Compra al menos un producto");
    }
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
          <div className='w-full flex flex-row justify-between'>
            <input type="text" className='p-2 rounded-md' name={nombre}
              onChange={(e) => {
                if (nombreRegex.test(e.target.value)) {
                  setNombre(e.target.value)
                }
              }} id="" placeholder='Ingresa tu primer nombre' />
            <input type="text" className='p-2 rounded-md' name={apellido}
              onChange={(e) => {
                if (nombreRegex.test(e.target.value)) {
                  setApellido(e.target.value);
                }
              }
              } id="" placeholder='Ingresa tu primer apellido' />
          </div>
          <div className='space-x-4'>
            <label className=''>
            </label>Tacos al Pastor ($2.50 cada uno):
            <input
              type="number"
              className='rounded-md'
              value={productos.tacoAlPastor}
              onChange={(e) => handleDecimalChange('tacoAlPastor', e.target.value)}
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
              onChange={(e) => handleDecimalChange('tacoDeAsada', e.target.value)}
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
              onChange={(e) => handleDecimalChange('tacoDeCarnitas', e.target.value)}
            />
          </div>
          <div className='w-full flex flex-row justify-around'>
            <button onClick={imprimirFactura} className='p-3 bg-green-400 rounded-xl'>Imprimir Factura</button>
            <button type="reset" onClick={cleanForm} className='p-3 bg-red-400 rounded-xl'>Limpiar formulario</button>
          </div>
          <div>
            <h3>Total: ${calcularTotal()}</h3>
          </div>
        </div>
      </div>

    </>
  )
}
import { useState } from 'react';
import logito from './assets/logo.png'
import jsPDF from 'jspdf'
import { FaUser } from "react-icons/fa";

export const App = () => {

  const [productos, setProductos] = useState({
    tacoAlPastor: 0,
    tacoDeAsada: 0,
    tacoDeCarnitas: 0,
  });

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');

 // const handleNombreChange = (e) => {
   // const value = e.target.value.replace(/[0-9\s]/g, ''); // Remover números y espacios en blanco
   // setNombre(value);
 // };

  //const handleApellidoChange = (e) => {
  //  const value = e.target.value.replace(/[0-9\s]/g, ''); // Remover números y espacios en blanco
  //  setApellido(value);
  //};


  const handleDecimalChange = (producto, valor) => {
    const roundedValor = parseFloat(valor).toFixed(0);
    setProductos({ ...productos, [producto]: roundedValor });
  };

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
    setDireccion('');
    setProductos({
      tacoAlPastor: 0,
      tacoDeAsada: 0,
      tacoDeCarnitas: 0,
    })
  }

  const imprimirFactura = () => {
    if (calcularTotal() !== "0.00") {
      const lineHeight = 10;
      const startX = 10;
      const startY = 30;
      const columnWidth = 60;
      const rowHeight = 10;
      const totalWidth = 180;

      const doc = new jsPDF();
      const fechaActual = new Date().toLocaleDateString();

      doc.setLineWidth(0.5);
      doc.line(startX, startY + 100, startX + totalWidth, startY + 100); // Línea encabezado
      doc.line(startX + columnWidth, startY + 100, startX + columnWidth, startY + 150); // Línea vertical
      doc.line(startX + 2 * columnWidth, startY + 100, startX + 2 * columnWidth, startY + 150); // Línea vertical

      doc.addImage(logito, 'PNG', 2, 2, 20, 20);
      doc.text(`Factura. Cliente: ${nombre} ${apellido}.`, startX, startY + 70);
      doc.text('SuperTacos, tu taquería al pastor de confianza', startX, startY + 80);
      doc.text(`Direccion: ${direccion}.`, startX, startY + 90);
      doc.text(`Fecha: ${fechaActual}.`, startX, startY + 100);


      doc.rect(startX, startY + lineHeight, totalWidth, rowHeight, 'S');
      doc.text('Producto', startX + 5, startY + lineHeight + 7);
      doc.text('Cantidad', startX + columnWidth, startY + lineHeight + 7);
      doc.text('Subtotal', startX + 2 * columnWidth, startY + lineHeight + 7);

      let currentY = startY + 2 * lineHeight;
      doc.rect(startX, currentY, totalWidth, rowHeight, 'S');
      doc.text('Tacos al Pastor', startX + 5, currentY + 7);
      doc.text(productos.tacoAlPastor.toString(), startX + columnWidth, currentY + 7);
      doc.text(`$${(productos.tacoAlPastor * 2.5).toFixed(2)}`, startX + 2 * columnWidth, currentY + 7);

      currentY += lineHeight;
      doc.rect(startX, currentY, totalWidth, rowHeight, 'S');
      doc.text('Tacos de Asada', startX + 5, currentY + 7);
      doc.text(productos.tacoDeAsada.toString(), startX + columnWidth, currentY + 7);
      doc.text(`$${(productos.tacoDeAsada * 3.0).toFixed(2)}`, startX + 2 * columnWidth, currentY + 7);

      currentY += lineHeight;
      doc.rect(startX, currentY, totalWidth, rowHeight, 'S');
      doc.text('Tacos de Carnitas', startX + 5, currentY + 7);
      doc.text(productos.tacoDeCarnitas.toString(), startX + columnWidth, currentY + 7);
      doc.text(`$${(productos.tacoDeCarnitas * 3.5).toFixed(2)}`, startX + 2 * columnWidth, currentY + 7);

      currentY += lineHeight;
      doc.rect(startX, currentY, totalWidth, rowHeight, 'S');
      doc.text('Total', startX + columnWidth, currentY + 7);
      doc.text(`$${calcularTotal()}`, startX + 2 * columnWidth, currentY + 7);

      doc.save('factura.pdf');
    } else {
      alert("Compra al menos un producto");
    }
  };




  return (
    <>
      <div className='mt-28 w-full flex justify-center items-center'>
        <div className='py-5 px-4 flex flex-col justify-center items-center border-4 shadow-lg border-lime-700 bg-orange-200 space-y-9 rounded-xl'>
          <div className=''>
            <div className='w-40 rounded-full'>
              <img src={logito} className='' alt="" />
            </div>
          </div>
          <h2 className='text-2xl font-bold'>Venta de Tacos</h2>
          <div className='w-full flex flex-row justify-between'>
            <div className='relative'>
              <input type="text" className='p-2 rounded-md required:border-red-500' name={nombre}
                 id="" pattern="[A-Za-z]+" placeholder='Primer nombre' required />
              <FaUser className='absolute top-3 right-5' />
            </div>
            <div className='relative'>
              <input type="text" className='p-2 rounded-md required:border-red-500' name={apellido}
                id="" pattern="[A-Za-z]+" placeholder='Primer apellido' required />
              <FaUser className='absolute top-3 right-5' />
            </div>
          </div>
          <div>
            <label>
              Ingresa la dirección
            </label>
            <input type="text" className='p-2 rounded-md required:border-red-500' name={direccion} />
          </div>
          <div className='space-x-4'>
            <label className=''>
            </label>Tacos al Pastor ($2.50 cada uno):
            <input
              type="number"
              className='rounded-md w-32'
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
              className='rounded-md w-32'
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
              className='rounded-md w-32'
              onChange={(e) => handleDecimalChange('tacoDeCarnitas', e.target.value)}
            />
          </div>
          <div className='w-full flex flex-row justify-around'>
            <button type='submit' onClick={imprimirFactura} className='p-3 bg-green-400 rounded-xl'>Imprimir Factura</button>
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

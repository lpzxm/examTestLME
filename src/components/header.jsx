import foodLogo from '../assets/logo.png'

export const Header = () => {


    return (
        <>
            <header className='fixed px-4 flex flex-row justify-between items-center w-full h-24 bg-orange-200 z-50'>
                <div>
                    <img src={foodLogo} className='w-24' alt="" />
                </div>
                <div>
                    <button className='bg-green-600 rounded-lg p-3'>Imprimir factura</button>
                </div>
            </header>
        </>
    )
}
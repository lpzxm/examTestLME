import udblogo from '../assets/UDB_negras.png'

export const Footer = () => {

    return (
        <>
            <footer className="mt-4 w-full flex justify-center items-center bg-orange-200">
                <div className="w-full flex flex-row justify-evenly gap-10 ">
                    <div className='flex justify-center items-center'>
                        <img src={udblogo} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <ul className='space-y-2 text-lg'>
                            <li>José Adrian López Medina - LM242664</li>
                            <li>Christopher Tommy Núñez Pineda - NP</li>
                            <li>Sara Yamileth Torres Henríquez - TH242684</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
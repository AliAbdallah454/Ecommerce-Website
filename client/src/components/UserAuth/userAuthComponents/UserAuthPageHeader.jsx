import { NavLink } from 'react-router-dom'

import wolfIcon from '../images/wolfIcon.svg'

export default function UserAuthPageHeader() {

    return(
        
            <header>

                <NavLink to='/'>
                    <div id="iconDiv" className='d ml-7'>
                        <img src={ wolfIcon } className='w-20 h-20' alt="" />
                    </div>
                </NavLink>

                <div className='p-3 pb-10 flex justify-center items-center flex-col'>
                    <h1 className='p-4 font-extrabold text-4xl'>Join Us !!!</h1>
                    <p className='d font-extrabold'>Login to the X Family of brands</p>
                    <p className=''>Sportswear, Cassual style, Vintage</p>
                </div>

            </header>

    )

}
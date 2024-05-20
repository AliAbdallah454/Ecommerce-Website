import { Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'

import NavbarButton from './NavbarButton'
import NavbarIcon from './NavbarIcon'
import NavbarLink from './NavbarLink'

import wolfIcon from './images/wolfIcon.svg'
import profileIcon from './images/profileIcon.svg'
import heartIcon from './images/heartIcon.svg'
import cartIcon from './images/cartIcon.svg'

export default function Navbar() {

    const navigate = useNavigate()

    const handleProfileIcon = async (e) => {
        e.preventDefault()

        const response = await axios.get('http://localhost:3001/users/is-signed-in', {withCredentials: true})

        if(response.data.status === "ok"){
            navigate('/profile/dashboard')
        }
        else{
            navigate('/login')
        }
    }

    const handleHeartIcon = async (e) => {
        e.preventDefault()

        const response = await axios.get('http://localhost:3001/users/is-signed-in', {withCredentials: true})

        if(response.data.status === "ok"){
            navigate('/profile/dashboard')
        }
        else{
            navigate('/login')
        }
    }
    
    const handleCartIcon = (e) => {

        e.preventDefault()
        navigate('/checkout')

    }

    return(

        <>
        
            <div className="bg-white px-16 h-16 flex items-center">

                <div id="right-side" className="w-7/12 h-16 bg-white flex items-center justify-start">

                    <Link to="/">
                        <img src={ wolfIcon } alt='' className='w-16 h-16'/>
                    </Link>

                    <NavbarButton text="SPORT" url="/" />
                    <NavbarButton text="MEN" url="/" />
                    <NavbarButton text="WOMEM" url="/women" />
                    <NavbarButton text="CUSTOM" url="/" />
                    <NavbarButton text="DEALS" url="/" />

                </div>

                <div id='left-side' className='bg-white w-5/12 h-16 flex items-center justify-end'>

                    <NavbarIcon image={ profileIcon } onClick={ handleProfileIcon } />
                    <NavbarIcon image={ heartIcon } onClick={ handleHeartIcon } />
                    <NavbarLink image={ cartIcon } to="checkout"/>
                    
                </div>

            </div>

            <div className='border border-gray-400'></div>

            <Outlet />

        </>

    )

}
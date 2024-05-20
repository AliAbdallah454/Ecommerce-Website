import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import ProfileButton from './ProfileButton'
import Menu from './Menu'

export default function Logout() {

    const navigate = useNavigate()

    const handleLogout = async (e) => {

        e.preventDefault()
        const response = await axios.get("http://localhost:3001/users/logout", { withCredentials: true })
        alert(response.data.message)
        if(response.data.status === "ok"){
            navigate('/')
        }

    }

    return (
        
        <div className="flex">
    
            <div className='mt-10 flex justify-center w-4/12 h-96'>
                <Menu />
            </div>
    
            <div className="py-10 w-8/12 flex justify-center items-center">
                <ProfileButton text="LOGOUT" onClick={ handleLogout } />
            </div>
    
        </div>
    )
}

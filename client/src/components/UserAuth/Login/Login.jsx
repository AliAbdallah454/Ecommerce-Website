import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

import ServicesButton from '../userAuthComponents/ServicesButton'
import InputForm from '../userAuthComponents/InputForm'
import Button from '../userAuthComponents/Button'
import Error from '../userAuthComponents/Error'
import BulletPoints from '../userAuthComponents/BulletPoints'
import UserAuthPageHeader from '../userAuthComponents/UserAuthPageHeader'
import Footer from '../../Footer/Footer'

import googleIcon from '../images/googleIcon.png'
import facebookIcon from '../images/facebookIcon.png'

export default function Login() {

    const navigate = useNavigate()

    let [showError,  setShowError] = useState(false)
    let [errorMessage, setErrorMessage] = useState('')

    let [email, setEmail] = useState("")
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    let [password, setPassword] = useState("")
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const loginInof = {
            email: email,
            password: password
        }

        const response = await axios.post("http://localhost:5000/users/login", loginInof, { withCredentials : true })

        if(response.data.status === "ok"){
            navigate('/profile/dashboard')
        }
        else{
            setErrorMessage(response.data.message)
            setShowError(true)
        }

    }

    return(

        <div>

            <UserAuthPageHeader />

            <div className='flex justify-center items-center'>
                <div id='sections' className='w-7/12 flex justify-between'>

                    <BulletPoints />

                    <div id='righy-side' className='px-5 w-6/12 border-l-2 border-gray-200 bg-white'>

                        <h1 className='pb-5 d font-bold text-2xl'>LOGIN</h1>

                        <ServicesButton text="Continue With Google" image={ googleIcon } />
                        <ServicesButton text="Continue With Facebook" image={ facebookIcon } />

                        <InputForm text="Email Address:" type="email" onChange={ handleEmail } />
                        <InputForm text="Password:" type="password" onChange={ handlePassword } />

                        {showError ? <Error text={ errorMessage } /> : null}

                        <Button text="Login" onClick={ handleSubmit } />

                        <div className='py-5 flex justify-end items-center'>
                            <button onClick={() => alert('pressed')}>
                                <p className='mr-2 underline'>Forgot Password ?</p>
                            </button>
                        </div>

                        <div className='py-5 flex justify-center items-center'>

                            <NavLink to='/signup'>
                                <p className='font-extrabold underline'>Create an Account with Email</p>
                            </NavLink>

                        </div>

                    </div>

                </div>
            </div>

            <Footer/>

        </div>

    )

}
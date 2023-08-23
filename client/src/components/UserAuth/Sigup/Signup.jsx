import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import axios from 'axios'

import UserAuthPageHeader from "../userAuthComponents/UserAuthPageHeader"
import BulletPoints from "../userAuthComponents/BulletPoints"
import ServicesButton from "../userAuthComponents/ServicesButton"
import InputForm from "../userAuthComponents/InputForm"
import Button from "../userAuthComponents/Button"
import Footer from "../../Footer/Footer"
import Error from "../userAuthComponents/Error"

import googleIcon from '../images/googleIcon.png'
import facebookIcon from '../images/facebookIcon.png'


export default function Signup() {

    const navigate = useNavigate()

    let [showError, setShowError] = useState(false)
    let [errorMessage, setErrorMessage] = useState("")

    let [firstName, setFirstName] = useState("")
    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }

    let [lastName, setLastName] = useState("")
    const handleLastName = (event) => {
        setLastName(event.target.value)
    }

    let [email, setEmail] = useState("")
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    let [password, setPassword] = useState("")
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    let [verifyPassword, setVerifyPassword] = useState("")
    const handleVerifyPassword = (event) => {
        setVerifyPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const signupInfo = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            verifyPassword: verifyPassword
        }

        const response = await axios.post("http://localhost:5000/users/signup", signupInfo, { withCredentials: true })
        if(response.data.status === "ok"){
            navigate('/profile/dashboard')
        }
        else{
            setShowError(true)
            setErrorMessage(response.data.message)
        }

    }

    return(

        <div>

            <UserAuthPageHeader />

            <div className='flex justify-center items-center'>
                <div id='sections' className='w-7/12 flex justify-between'>

                    <BulletPoints />

                    <div id='righy-side' className='px-5 w-6/12 border-l-2 border-gray-200 bg-white'>

                        <h1 className='pb-5 d font-bold text-2xl'>SIGNUP</h1>
    
                        <ServicesButton text="Continue With Google" image={googleIcon} />
                        <ServicesButton text="Continue With Facebook" image={facebookIcon} />

                        <InputForm text="First Name:" type="text" onChange={ handleFirstName } />
                        <InputForm text="Last Name:" type="text" onChange={ handleLastName } />
                        <InputForm text="Email Address:" type="email" onChange={ handleEmail } />
                        <InputForm text="Password:" type="password" onChange={ handlePassword } />
                        <InputForm text="Re-enter password:" type="password" onChange={ handleVerifyPassword } />

                        {showError ? <Error text={ errorMessage } /> : null}

                        <Button text="Sign Up" onClick={ handleSubmit }/>

                        <div className='py-5 flex justify-center items-center'>
                            <NavLink to='/login'>
                                <p className='font-extrabold underline'>Already have an account ?</p>
                            </NavLink>
                        </div>

                    </div>

                </div>
            </div>

            <Footer/>

        </div>

    )

}
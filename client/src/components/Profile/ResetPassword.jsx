import { useState } from 'react'
import axios from 'axios'

import Menu from './Menu'
import Form from './Form'
import ProfileButton from './ProfileButton'

export default function ResetPassword() {

    let [oldPassword, setOldPassword] = useState('')
    const handleOldPassword = (e) => {
        setOldPassword(e.target.value)
    }

    let [newPassword, setNewPassword] = useState('')
    const handleNewPassword = (e) => {
        setNewPassword(e.target.value)
    }

    let [verifyNewPassword, setVerifyNewPassword] = useState('')
    const handleVerifyNewPassword = (e) => {
        setVerifyNewPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const info = {
            oldPassword: oldPassword,
            newPassword: newPassword,
            verifyNewPassword: verifyNewPassword
        }

        const response = await axios.post("http://localhost:3001/userinfo/resetpassword", info, { withCredentials: true })
        alert(response.data.message)

    }

    return (

        <div className="flex">
        
            <div className='mt-10 flex justify-center w-4/12 h-96'>
                <Menu />
            </div>

            <div className='py-10 w-8/12'>

                <div className='flex flex-col items-center'>

                    <Form onChange={ handleOldPassword } text="Old Password" type="password" />

                    <div className="pb-5"></div>

                    <Form onChange={ handleNewPassword } text="New Password" type="password" />
                    <Form onChange={ handleVerifyNewPassword } text="Re-Enter New Password" type="password" />

                    <div className="pb-5"></div>

                    <ProfileButton onClick={ handleSubmit } text="Reset Password" />

                </div>

            </div>

        </div>

    )

}

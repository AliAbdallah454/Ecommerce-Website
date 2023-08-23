import { Link } from 'react-router-dom'

import Menu from './Menu'
import ProfileButton from './ProfileButton'

export default function Dashboard() {

    return (

        <div className="flex">
    
            <div className='mt-10 flex justify-center w-4/12 h-96'>
                <Menu />
            </div>
    
            <div className="py-10 w-8/12">
                <div className='flex flex-col items-center'>
                    <h1 className='p-4 pb-6 text-4xl font-extrabold'>MY ACCOUNT</h1>
                    <div className='flex'>
                        <div className='w-88 border-2 border-gray-300'>
                            <div className='p-6 text-center font-extrabold text-4xl'>
                                <h1>Default Shipping Address</h1>
                            </div>
                            <div className='text-center'>
                                <p>Set your default shipping address</p>
                            </div>
                            <div className='p-7 flex justify-center items-center'>
                                <Link to="/profile/shipping-address">
                                    <ProfileButton text="Edit Address" />
                                </Link>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
    
        </div>

    )

}
import BulletPoint from './BulletPoint'

import stopwatchIcon from '../images/stopwatchIcon.svg'
import arrowsLeftRightIcon from '../images/arrowsLeftRightIcon.svg'
import heartIcon from '../images/heartIcon.svg'
import emailIcon from '../images/emailIcon.svg'

export default function BulletPoints() {
    
    return (
        <div id='left-side' className='p-2 h-52 w-6/12 bg-white'>
            <h1 className='pb-2 text-3xl font-bold'>Benefits</h1>

            <BulletPoint image={ stopwatchIcon } text="Checkout Faster" />
            <BulletPoint image={ arrowsLeftRightIcon } text="Track orders and return status" />
            <BulletPoint image={ heartIcon } text="Save favorites to your wishlist" />
            <BulletPoint image={ emailIcon } text="Manage email preferences" />

        </div>
    )
    
}

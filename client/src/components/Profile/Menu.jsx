import MenuLink from './MenuLink'

export default function Menu() {
    return (

        <>
            <div className='bg-gray-100 w-72'>

                <h1 className='p-4 text-2xl font-extrabold'>Menu</h1>

                <MenuLink text="Dashboard" url="/profile/dashboard" />
                <MenuLink text="Orders" url="/profile/orders" />
                <MenuLink text="Returns" url="/profile/returns" />
                <MenuLink text="Wishlist" url="/profile/whishlist" />
                <MenuLink text="Personal Information" url="/profile/presonal-information" />
                <MenuLink text="Reset Password" url="/profile/reset-password" />
                <MenuLink text="Shipping Address" url="/profile/shipping-address" />
                <MenuLink text="Logout" url="/profile/logout" />

                <div className='pb-2'></div>

            </div>

        </>

    )
}

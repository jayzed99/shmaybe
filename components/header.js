import Link from 'next/link';

// const MenuItem = ({ children, href }) =>
//   <Link href={href}>
//     <li className='block mt-4 inline-block  rounded-md text-center bg-orange-200 hover:bg-orange-500 px-4 py-2 m-2 lg:mt-0 hover:text-white mr-4'>
//       <a className='no-underline hover:text-white'>{children}</a>
//     </li>
//   </Link>

function Header({ user, loading }) {
  return (
    <header className='bg-UoA'>
      <nav className='container flex items-center flex-wrap  py-2 '>
        <a className='logo' href='/'>
          <img src='/images/logo.png' alt="logo"></img>
        </a>
        <div id='Brand' className='text-2xl'>
          UoA Course Catalogue
        </div>
        {/* <ul className=' flex   '>
          {!loading &&
            (user ? (
              <>
                <MenuItem href='/reportSWR'>
                Report
                </MenuItem>
                <MenuItem href='/api/logout'>
                Logout
                </MenuItem>
              </>
            ) : (
              <MenuItem href='/api/login'>
                Login
              </MenuItem>
            ))}
        </ul> */}
      </nav>

    </header>
  )
}

export default Header

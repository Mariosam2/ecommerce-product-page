import logo from '../images/logo.svg';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';

const Navbar = () => {
  return (
    <nav id='site_nav'>
      <div className='container mx-auto flex items-center py-4 border-b border-gray-200'>
        <div id='navbar-brand' className='grid py-4'>
          <img className='max-w-full h-auto' src={logo} alt='logo' />
        </div>
        <div className='nav-links flex items-center ps-12'>
          <a className='mx-3 pt-4 pb-2' href='#'>
            Collections
          </a>
          <a className='mx-3 pt-4 pb-2' href='#'>
            Men
          </a>
          <a className='mx-3 pt-4 pb-2' href='#'>
            Women
          </a>
          <a className='mx-3 pt-4 pb-2' href='#'>
            About
          </a>
          <a className='mx-3 pt-4 pb-2' href='#'>
            Contact
          </a>
        </div>

        <div className='icons-wrapper flex items-center ms-auto'>
          <img src={cart} alt='' className='cart w-6 h-6' />
          <img src={avatar} alt='' className='avatar w-12 h-12 ms-6' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

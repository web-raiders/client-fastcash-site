import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '@styles/navbar.css'
import { motion } from 'framer-motion';
import { Data } from '@utils/index';
import { Logo } from "@assets/images";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [openMenu, setOpenMenu] = useState(null)
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const threshold = 200;
    

    function handleToggle(type: string, name?: any){
        type === 'menu' ? setIsOpen(!isOpen) : setOpenMenu(openMenu === name ? null : name)
    }

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > threshold) {
            setShowNavbar(false)
        } else if (currentScrollY < lastScrollY || currentScrollY <= threshold) {
            setShowNavbar(true)
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // setShowNavbar(true);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [lastScrollY])
    const navlist = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About Us',
            path: '/about'
        },
        {
            name: 'Products',
            path: '/products',
        },
        {
            name: 'Apply Now',
            path: 'https://docs.google.com/forms/d/e/1FAIpQLSe2nvsxuPIdObeks1S6Fa1Tr5IJWZ4n4hqrSWM6GYyDH13Gdg/viewform?usp=preview',
        },
        {
            name: 'Contact Us',
            path: '/contact'
        },
    ];

    return (
        <nav className={`_nav ${showNavbar ? 'visible' : 'hidden'}`}>
            <div className="_container">
                <div className="_flex_box">
                    <div className='_logo'>
                        <a href='/'><img src={Logo} alt='logo' width={"120"} height={"120"} /></a>
                    </div>
                    <div className="_nav_menu">
                        <ul className="_nav_list">
                            {navlist.map((item: any) => (
                                <div key={item?.name} onClick={() => handleToggle('subMenu', item?.name)}>
                                    <li className={'_nav_list_item'}>
                                        <a href={item.path}>{item.name}</a>
                                    </li>
                                </div>
                            ))}
                            {/* <div className='_nav_btn'>Get a Quote</div> */}
                        </ul>
                        <span className='_icon' onClick={() => handleToggle('menu')}>
                        {
                            isOpen ? <IoMdClose size={'40px'} color='#12263A' /> : <RxHamburgerMenu size={'40px'} color='#12263A' />
                        }
                        </span>
                        {/** Mobile Version */}
                        {isOpen && 
                        <motion.ul 
                        className='_nav_list_mobile' 
                        animate={{ opacity: 1, y: 25 }}
                        initial={{ opacity: 0, y: 5 }}
                        >
                            {navlist.map((item: any) => (
                                    <div key={item?.name} className='inline-flex' onClick={() => handleToggle('subMenu', item?.name)}>
                                        <motion.li 
                                        className={'_nav_list_item_mobile'}
                                        >
                                        <motion.a href={item.path}>{item.name}</motion.a>
                                        </motion.li>
                                    </div>
                                ))}
                            </motion.ul>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

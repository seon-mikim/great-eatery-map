import Link from 'next/link';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { BiX } from 'react-icons/bi';
import { DiVim } from 'react-icons/di';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar__logo'>great Eatery Map</div>
      <div className='navbar__list'>
        <Link href='/stores' className='navbar__list--item'>
          맛집 목록
        </Link>
        <Link href='/stores/new' className='navbar__list--item'>맛집 등록</Link>
        <Link href='/users/likes' className='navbar__list--item'>찜한 가게</Link>
        <Link href='/users/login' className='navbar__list--item'>로그인</Link>
      </div>
      <div
        role='presentation'
        className='navbar__button'
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        {isOpen ? <BiX /> : <BiMenu />}
      </div>
      {isOpen && (
        <div className='navbar--mobile'>
          <div className='navbar__list--mobile'>
            <Link href='/stores' className='navbar__list--item--mobile'>
              맛집 목록
            </Link>
            <Link href='/stores/new' className='navbar__list--item--mobile'>맛집 등록</Link>
            <Link href='/users/likes' className='navbar__list--item--mobile'>찜한 가게</Link>
            <Link href='/users/login' className='navbar__list--item--mobile'>로그인</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

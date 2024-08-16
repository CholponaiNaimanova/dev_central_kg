import React, { useEffect, useState } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from '../Modal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ModalLogin from '../ModalLogin';
import { isUserLoggetIn } from "../Utils";
import Cookies from 'js-cookie';

const Header: React.FC = () => {

  const location = useLocation()
  console.log('location', location.pathname);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const nav = useNavigate()

    useEffect(() => {
      const loggedIn = isUserLoggetIn()
      console.log('loggedIn', loggedIn);
      
      setIsLoggedIn(loggedIn)
    },[isLoggedIn, setIsLoggedIn])

    const logout = () => {
      Cookies.remove('authToken')
      setIsLoggedIn(false)
    }

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const openLoginModal = () => setLoginModalVisible(true);
    const closeLoginModal = () => setLoginModalVisible(false);

    const isLoggetIn = isUserLoggetIn()

    

  return (
    <div id="header">
      <div className="container">
        <div className="main-header">
            <Link to={"/"}>
              <img src="https://devkg.com/js/img/logo.458f2cd.svg" alt="img" /> 
            </Link>
          <nav>
            <Link to={"/vacancy"}>Вакансии</Link>
            <Link to={"/events"}>Мероприятия</Link>
            <Link to={"/meetups"}>Видео</Link>
            <Link to={"/organizations"}>Организация</Link>
            <Link to={"/community"}>Сообщество</Link>
          </nav>


                    <div className="my-btn">
                        {isLoggetIn ? (
                          <div className="menu" onClick={() => {
                          logout()
                          }}>
                              <GiHamburgerMenu />
                          </div>
                        ): (
                        <div className="">
                          <button className='icon-btn'><FaArrowRightToBracket /></button>
                          <button className="login-button" onClick={() =>  {
                            nav('/auth')
                          }}>Войти</button>
                        </div>
                        )}
                        
                    </div>
                </div>
            </div>
            <Modal show={modalVisible} handleClose={closeModal} />
            <ModalLogin show={loginModalVisible} handleClose={closeLoginModal} />
        </div>
    );
};

export default Header;

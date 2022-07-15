import React from 'react'
import portada from '../images/illustration-working.svg'
import recogn from '../images/icon-brand-recognition.svg'
import record from '../images/icon-detailed-records.svg'
import customizable from '../images/icon-fully-customizable.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'

export const HomeScreen = () => {
  return (
    <div className='container'>
        <div className="container__banner ">
            <div className="container__inner">
                <header className='header'>
                    <div className='header__menu_completo'>
                        <div className='header__logo'>Shortly</div>
                        <div >                        
                            <ul className='header__menu'>
                                <li><a href='#'>Features</a></li>
                                <li><a href='#'>Pricing</a></li>
                                <li><a href='#'>Resources</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__login">
                        <button className='btn--transparent'>Login</button>
                        <button className='btn'>Sign Up</button>
                    </div>
                    <div className='menu'>
                        <a href="#" id="menu_on">
                            <span className='menu__span1'></span>
                            <span className='menu__span2'></span>
                            <span className='menu__span3'></span>
                        </a>
                    </div>
                </header>
            </div>
            <div className='container__inner container__inner--left'>
                <div className="container__row">
                    <div className="container__imagen">
                        <img src={portada} className="container__imagen_buro"/>
                    </div>
                    <div className="container__info">
                        <div className='container__info_title_row'>
                            <div className=' container__info_title'>
                                <h1 className='header__title'>More than just shorter links</h1>
                            </div>
                        </div>
                        <div className='container__info_title_row'>
                            <div className='container__inner container__info_title'>
                                <p className='header__subtitle'>
                                    Build your brand’s recognition and get detailed insights
                                    on how your links are performing.
                                </p>
                            </div>
                        </div>
                        <div className='container__info_title_row'>
                            <div className='container__info_title'>
                                <button className='btn btn--large' >Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        {/* Session del medio */}
        <div className='container__inner container__inner--middle'>
            <div className="principal principal__middle">
                <input type="text" placeholder='shorten a link here'/>
                <button className='btn btn--squart'>Shorten it!</button>
            </div>
        </div>
        {/* Parte principal de la pagina */}
        <main className='principal'>
            <div className='container__inner'>
                <div className="principal principal__header">
                    <div className='principal__title'>
                        <h1 >Advanced Statistics</h1>
                    </div>
                    <div className='principal__subtitle'>
                        <p >
                            Track how your links are performing across the web with our
                            advanced statistics dashboard.
                        </p>
                    </div>
                    {/* Cajas con la informacion de la API */}
                    <div className='cards'>
                        <div className='cards__card'>
                            <div className='cards__row'>
                                <div className='cards__image'>
                                    <img src={recogn} />
                                </div>
                            </div>
                            <div className='cards__info'>
                                <h5>Brand Recongnition</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className='cards__division'></div>
                        

                        <div className='cards__card cards__card--1'>
                            <div className='cards__row'>
                                <div className='cards__image'>
                                    <img src={record} />
                                </div>
                            </div>
                            <div className='cards__info'>
                                <h5>Detailed Records</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.itulo</p>
                            </div>
                        </div>
                        <div className='cards__division1'></div>
                        <div className='cards__card cards__card--2'>
                            <div className='cards__row'>
                                <div className='cards__image'>
                                    <img src={customizable} />
                                </div>
                            </div>
                            <div className='cards__info'>
                                <h5>Fully Customizable</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>
            <div className="principal__body">
            
                <div className="principal__boost">
                    <div>
                        <h3 className='principal__title principal__title--boost'>Boost your links today</h3>
                    </div>
                    <div className='principal__boost_buttom'>
                        <button className='btn btn--large'>Get Started</button>
                    </div>
                </div>
            </div>
        </main>
        <footer className='footer '>
            <div className='footer__info container__inner'>
                <div className='footer__title'>Shortly</div>
                <div className='footer__colums footer__columns_first'>
                    <h6 className='footer__encabezado'>Features</h6>
                    <a>Link Shortening</a>
                    <a>Branded Links</a>
                    <a>Analytics</a>
                </div>
                <div className='footer__colums'>
                    <h6 className='footer__encabezado'>Resources</h6>
                    <a>Blog</a>
                    <a>Developers</a>
                    <a>Support</a>
                </div>
                <div className='footer__colums'>
                <h6 className='footer__encabezado'>Company</h6>
                    <a>About</a>
                    <a>Our Team</a>
                    <a>Careers</a>
                    <a>Contact</a>
                </div>
                <div className='footer__redes'>
                    <div className='footer__redes_inner'>
                        <img  src={facebook} />
                        <img  src={twitter}/>
                        <img  src={pinterest}/>
                        <img  src={instagram}/>
                        
                    </div>
                </div>
            </div>
        
        </footer>
    </div>
  )
}

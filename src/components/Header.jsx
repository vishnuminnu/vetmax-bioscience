import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/FullLogo (2).png";
import { ThemeContext } from './ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <div className='container-fluid' style={{ 
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
            position: 'relative',
            zIndex: 1000,
            backgroundColor: 'var(--header-bg)'
        }}>
            <nav className={`navbar navbar-expand-lg py-3 ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
                <div className="container-fluid">
                    {/* Logo container */}
                    <div style={{ 
                        paddingLeft: '2rem',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <NavLink className="navbar-brand" to="/" style={{ 
                            padding: 0,
                            margin: 0,
                            lineHeight: 0
                        }}>
                            <img
                                src={logo}
                                alt="logo"
                                style={{ 
                                    width: '100px',
                                    height: '90px',
                                    objectFit: 'cover',
                                    transform: 'translateY(5px)'
                                }}
                            />
                        </NavLink>
                    </div>
                    
                    <div className="d-flex align-items-center">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="theme-toggle me-3"
                            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'var(--text-color)',
                                fontSize: '1.25rem'
                            }}
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </button>

                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav" style={{ gap: '1.5rem' }}>
                            <li className="nav-item">
                                <NavLink 
                                    to="/" 
                                    className={({ isActive }) => 
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                    end
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    to="/research" 
                                    className={({ isActive }) => 
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Research & Innovation
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    to="/allproducts" 
                                    className={({ isActive }) => 
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    Products & Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    to="/aboutus" 
                                    className={({ isActive }) => 
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <style>{`
                .nav-link {
                    padding: 0.5rem 1rem;
                    transition: all 0.3s ease;
                    color: var(--text-color);
                }
                .nav-link:not(.active):hover {
                    background-color: var(--primary-color) !important;
                    color: white !important;
                    border-radius: 4px;
                }
                .nav-link.active {
                    color: var(--primary-color) !important;
                    background-color: transparent !important;
                    font-weight: bold;
                    border-radius: 4px;
                }
                .nav-link:active:not(.active) {
                    background-color: var(--primary-color) !important;
                    color: white !important;
                }
                .navbar {
                    background-color: var(--header-bg) !important;
                }
            `}</style>
        </div>
    );
};

export default Header;
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logoLight from "../assets/FullLogo (2).png";
import logoDark from "../assets/logo3.png"; // You'll need to create this dark version
import { ThemeContext } from './ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <div className='container-fluid' style={{ 
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
            position: 'relative',
            zIndex: 1000,
            backgroundColor: darkMode ? '#1a1a1a' : '#ffffff'
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
                                src={darkMode ? logoDark : logoLight}
                                alt="Vetmax Bioscience logo"
                                style={{ 
                                    width: '100px',
                                    height: '90px',
                                    objectFit: 'cover',
                                    transform: 'translateY(5px)',
                                    transition: 'opacity 0.3s ease'
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
                                color: darkMode ? '#ffffff' : '#000000',
                                fontSize: '1.25rem',
                                transition: 'color 0.3s ease'
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
                            style={{
                                borderColor: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'
                            }}
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
                                    style={{ color: darkMode ? '#ffffff' : '#000000' }}
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
                                    style={{ color: darkMode ? '#ffffff' : '#000000' }}
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
                                    style={{ color: darkMode ? '#ffffff' : '#000000' }}
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
                                    style={{ color: darkMode ? '#ffffff' : '#000000' }}
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
                }
                .nav-link:not(.active):hover {
                    background-color: #5FB0A5 !important;
                    color: white !important;
                    border-radius: 4px;
                }
                .nav-link.active {
                    color: #5FB0A5 !important;
                    background-color: transparent !important;
                    font-weight: bold;
                    border-radius: 4px;
                }
                .nav-link:active:not(.active) {
                    background-color: #5FB0A5 !important;
                    color: white !important;
                }
            `}</style>
        </div>
    );
};

export default Header;
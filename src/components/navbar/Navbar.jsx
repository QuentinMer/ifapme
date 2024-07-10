import { useRef, useState } from 'react'; 

import ifapmeLogo from "../../assets/images/images.jpeg";
import s from "./style.module.css";  
import { Link } from 'react-router-dom';
import { ClocheModale } from '../clocheModale/ClocheModale';

export function Navbar() {
    const navbarCollapseRef = useRef(null);
    const [showModal, setShowModal] = useState(false); 

    const handleNavItemClick = () => {
        if (navbarCollapseRef.current && window.innerWidth < 992) {
            if (navbarCollapseRef.current.classList.contains('show')) {
                navbarCollapseRef.current.classList.remove('show');
            }
        }
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };

    return (
        <nav className={`navbar navbar-expand-lg py-0 ${s.navbar}`}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img className={`${s.image}`} src={ifapmeLogo} alt="logo Konnecto" />
                </Link>
                <button className={`navbar-toggler ${s.button}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className={`bi bi-list ${s.icon}`}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navbarCollapseRef}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className={`nav-item py-2 px-4 ${s.navItemText}`}>
                            Bienvenue (User)
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${s.navLink}`} aria-current="page" to="/messages" onClick={handleNavItemClick}>
                                <i className="bi bi-envelope pe-1"></i>
                                Messages
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${s.navLink}`} to="/eleves" onClick={handleNavItemClick}>
                                <i className="bi bi-person-fill pe-1"></i>
                                Elèves
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${s.navLink}`} aria-current="page" to="/redacteurs" onClick={handleNavItemClick}>
                                <i className="bi bi-person-lines-fill pe-1"></i>
                                Rédacteurs
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link dropdown-toggle ${s.navLink}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-gear-fill"></i>
                            </a>
                            <ul className={`dropdown-menu dropdown-menu-end dropdown-menu-dark py-0 ${s.dropdownMenu}`}>
                                <li><Link className={`dropdown-item ${s.navLink}`} to="/modele-formulaire" onClick={handleNavItemClick}>Modèle formulaire</Link></li>
                                <li><Link className={`dropdown-item ${s.navLink}`} to="/user" onClick={handleNavItemClick}>user</Link></li>
                                <li><Link className={`dropdown-item ${s.navLink}`} to="/compte" onClick={handleNavItemClick}>Compte</Link></li>
                                <li><Link className={`dropdown-item ${s.navLink}`} to="/ifapme-charleroi" onClick={handleNavItemClick}>IFAPME Charleroi</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${s.navLink}`} onClick={handleModalOpen}>
                                <i className="bi bi-bell-fill"></i>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link dropdown-toggle ${s.navLink}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-question-circle-fill pe-1"></i>
                            </a>
                            <ul className={`dropdown-menu dropdown-menu-end dropdown-menu-dark py-0 ${s.dropdownMenu}`}>
                                <li><Link className={`dropdown-item ${s.navLink}`} to="/guide-utilisateur" onClick={handleNavItemClick}>
                                    <i className="bi bi-question-circle-fill pe-2"></i>
                                    Guide Utilisateur
                                </Link></li>
                                <hr className="m-0" />
                                <li><Link className={`dropdown-item ${s.navLink}`} to="/support-contact" onClick={handleNavItemClick}>
                                    <i className="bi bi-envelope-fill pe-2"></i>
                                    Contacter le support
                                </Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${s.navLink}`} to="/logout" onClick={handleNavItemClick}>
                                <i className="bi bi-power px-1"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Intégration de la modal */}
            <ClocheModale show={showModal} onHide={() => setShowModal(false)} />
        </nav>
    );
}

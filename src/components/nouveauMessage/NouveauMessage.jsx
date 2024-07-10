import React, { useState } from 'react';
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { TitreContenu } from './titreContenu/Titrecontenu';
import { ImagePdf } from './imagePdf/ImagePdf';
import { Formulaire } from './formulaire/Formulaire';

export function NouveauMessage() {
    const [activeTab, setActiveTab] = useState('titreContenu');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>
            <div className="container mt-4">
                <Link to="/messages" className={`${s.lien1}`}>
                    <i className="bi bi-arrow-return-left me-1"></i>
                    Retour à la liste des messages
                </Link>

                <div className="row mt-4">
                    <div className="col-6">
                        <h1 className={`${s.titre}`}>Nouveau message</h1>
                    </div>
                </div>
                <hr className={`${s.hr}`} />
                <div className="row">
                    <ul className="nav nav-tabs mt-3">
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === 'titreContenu' ? 'active' : ''}`} onClick={() => handleTabClick('titreContenu')} href="#">
                                Titre et contenu
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === 'imagesPdf' ? 'active' : ''}`} onClick={() => handleTabClick('imagesPdf')} href="#">
                                Images / PDF (0)
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === 'formulaire' ? 'active' : ''}`} onClick={() => handleTabClick('formulaire')} href="#">
                                Formulaire
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content mt-5">
                    {activeTab === 'titreContenu' && <TitreContenu />}
                    {activeTab === 'imagesPdf' && <ImagePdf />}
                    {activeTab === 'formulaire' && <Formulaire />}
                </div>
            </div>
        </>
    )
}

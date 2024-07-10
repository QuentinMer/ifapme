import { useState } from 'react';
import { Link } from "react-router-dom";
import s from "./style.module.css";
import axios from 'axios';

export function NouvelEleve() {
    const [eleve, setEleve] = useState({
        nom_eleve: '',
        prenom_eleve: '',
        classe_eleve: '',
        titulaire_eleve: '',
        emails: [''],
        telephones: ['']
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEleve(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEmailChange = (index, e) => {
        const { value } = e.target;
        const newEmails = [...eleve.emails];
        newEmails[index] = value;
        setEleve(prevState => ({
            ...prevState,
            emails: newEmails
        }));
    };

    const handleTelephoneChange = (index, e) => {
        const { value } = e.target;
        const newTelephones = [...eleve.telephones];
        newTelephones[index] = value;
        setEleve(prevState => ({
            ...prevState,
            telephones: newTelephones
        }));
    };

    const handleAjouterEmail = () => {
        setEleve(prevState => ({
            ...prevState,
            emails: [...prevState.emails, '']
        }));
    };

    const handleAjouterTelephone = () => {
        setEleve(prevState => ({
            ...prevState,
            telephones: [...prevState.telephones, '']
        }));
    };

    const handleRemoveEmail = (index) => {
        const newEmails = eleve.emails.filter((_, i) => i !== index);
        setEleve(prevState => ({
            ...prevState,
            emails: newEmails
        }));
    };

    const handleRemoveTelephone = (index) => {
        const newTelephones = eleve.telephones.filter((_, i) => i !== index);
        setEleve(prevState => ({
            ...prevState,
            telephones: newTelephones
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { nom_eleve, prenom_eleve, classe_eleve, titulaire_eleve, emails, telephones } = eleve;
            await axios.post('http://localhost:3001/api/eleves', {
                nom_eleve,
                prenom_eleve,
                classe_eleve,
                titulaire_eleve,
                email: emails.join('; '),
                telephone: telephones.join('; ')
            });
            alert('Nouvel élève ajouté avec succès');
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement du nouvel élève:', error);
            alert('Erreur lors de l\'enregistrement du nouvel élève');
        }
    };

    return (
        <>
            <div className="container mt-4">
                <Link to="/eleves" className={`${s.lien1}`}>
                    <i className="bi bi-arrow-return-left me-1"></i>
                    Retour à la liste des élèves
                </Link>

                <div className="row mt-4">
                    <div className="col-6">
                        <h1 className={`${s.titre}`}>Nouvel élève</h1>
                    </div>
                </div>
                <div className="row">
                        <div className="col-2 offset-8">
                            <button type="submit" className={`${s.button}`}>Enregistrer</button>
                        </div>
                    </div>
                <hr className={`${s.hr}`} />
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="mb-3 col-md-4">
                            <label htmlFor="nom_eleve" className="form-label">Nom</label>
                            <input type="text"
                                className="form-control"
                                id="nom_eleve"
                                name="nom_eleve"
                                value={eleve.nom_eleve}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 col-md-4">
                            <label htmlFor="prenom_eleve" className="form-label">Prénom</label>
                            <input type="text"
                                className="form-control"
                                id="prenom_eleve"
                                name="prenom_eleve"
                                value={eleve.prenom_eleve}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label htmlFor="classe_eleve" className="form-label">Classe</label>
                            <input type="text"
                                className="form-control"
                                id="classe_eleve"
                                name="classe_eleve"
                                value={eleve.classe_eleve}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="titulaire_eleve" className="form-label">Titulaire</label>
                            <input type="text"
                                className="form-control"
                                id="titulaire_eleve"
                                name="titulaire_eleve"
                                value={eleve.titulaire_eleve}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    Emails
                                </div>
                                <div className="mb-3">
                                    {eleve.emails.map((email, index) => (
                                        <div className="input-group p-3" key={index}>
                                            <input type="text"
                                                className="form-control"
                                                aria-label="Recipient's username"
                                                aria-describedby="button-addon2"
                                                value={email}
                                                onChange={(e) => handleEmailChange(index, e)}
                                            />
                                            <button className="btn btn-outline-dark" type="button" id="button-addon2" onClick={() => handleRemoveEmail(index)}>
                                                <i className="bi bi-trash3-fill"></i>
                                            </button>
                                        </div>
                                    ))}
                                    <div id="emailHelp" className="form-text ps-3">ex: mickey_mouse@examples.com</div>
                                    <button className={`mt-4 ms-3 ${s.button}`} type="button" onClick={handleAjouterEmail}>Ajouter un mail</button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    Téléphones
                                </div>
                                <div className="mb-3">
                                    {eleve.telephones.map((telephone, index) => (
                                        <div className="input-group p-3" key={index}>
                                            <input type="text"
                                                className="form-control"
                                                aria-label="Recipient's username"
                                                aria-describedby="button-addon2"
                                                value={telephone}
                                                onChange={(e) => handleTelephoneChange(index, e)}
                                            />
                                            <button className="btn btn-outline-dark" type="button" id="button-addon2" onClick={() => handleRemoveTelephone(index)}>
                                                <i className="bi bi-trash3-fill"></i>
                                            </button>
                                        </div>
                                    ))}
                                    <div id="tel" className="form-text ps-3">Numéro de téléphone auquel sera envoyé les messages SMS.</div>
                                    <button className={`mt-4 ms-3 ${s.button}`} type="button" onClick={handleAjouterTelephone}>Ajouter un numéro de téléphone</button>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </form>
            </div>
        </>
    );
}

import React, { useEffect, useState } from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';
import { getRedacteur } from '../services/RedacteurService';

export function Redacteur() {
    const [redacteurs, setRedacteurs] = useState([]);

    useEffect(() => {
        const fetchRedacteurs = async () => {
            try {
                const data = await getRedacteur();
                setRedacteurs(data);
            } catch (error) {
                console.error('There was an error fetching the redacteurs!', error);
            }
        };
        fetchRedacteurs();
    }, []);

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-6">
                    <h1 className={`${s.titre}`}>Rédacteurs</h1>
                </div>
                <div className="col-4 offset-2">
                    <Link to="/nouveau-redacteur">
                        <button className={`${s.button}`}>Nouvelle invitation</button>
                    </Link>
                </div>
            </div>

            <div className="row">
                <hr className={`${s.hr} mt-4`} />
            </div>

            <div className="row mt-3">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nom-Prénom</th>
                                <th scope="col">Email</th>
                                <th scope="col">Ecole(s)</th>
                                <th scope="col">Rôle</th>
                                <th scope="col">Statut Invitation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {redacteurs.map((redacteur) => (
                                <tr key={redacteur.id_redact}>
                                    <td>{redacteur.nom_prenom_redact}</td>
                                    <td>{redacteur.email_redact}</td>
                                    <td>{redacteur.ecole_redact}</td>
                                    <td>{redacteur.role_redact}</td>
                                    <td>{redacteur.statut_invit_redact}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

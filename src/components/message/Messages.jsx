import s from "./style.module.css";
import { Link } from "react-router-dom";

export function Messages() {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <h1 className={`${s.titre}`}>Messages</h1>
                    </div>
                    <div className="col-4 offset-2">
                        <Link to="/messages/nouveau-message">
                        <button className={`${s.button}`}>Nouveau message</button>
                        </Link>
                    </div>
                </div>

                <div className="row">
                    <hr className={`${s.hr} mt-4`} />
                    <input type="search" className="form-control" id="rechercheMessage"
                        placeholder="Rechercher sur le titre, le contenu, l'auteur"></input>
                        <hr className={`${s.hr} mt-4`} />
                </div>
                <div className="row mt-3">
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>
                                    
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>:</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )

}
import s from "./style.module.css";
import { Link } from "react-router-dom";

export function NouveauRedacteurForm() {
    return (
        <>
         <div className="container">
                <h1 className={`${s.titre}`}>Inviter un nouveau rédacteur</h1>
                <hr className={`${s.hr}`} />

                <form>
                    <div className="row">
                        <div className="col-md-8 col-12">
                        <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Nom</label>
                                <input type="name" className="form-control" id="name"></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Prénom</label>
                                <input type="name" className="form-control" id="firstname"></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                           
                        </div>
                    </div>
         
                    <div className="mt-2">
                        <Link to="#">
                        <button type="submit" className={`${s.button}`}>Envoyer l'invitation</button>
                        </Link>
                    </div>
                   

                </form>


            </div>
        </>
    )
    
}
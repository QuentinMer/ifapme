import { Link } from "react-router-dom";
import s from "./style.module.css";

export function Login() {
    return (
        <>
            <div className="container">
                <h1 className={`${s.titre}`}>Identification</h1>
                <hr className={`${s.hr}`} />

                <form>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Mot de passe</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"></input>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                        <label className="form-check-label" for="exampleCheck1">Se rappeler de moi</label>
                    </div>

                    <div className="mt-4">
                        <button type="submit" c className={`${s.button}`}>Se connecter</button>
                    </div>
                    <div className="mt-4">
                        <Link className={`${s.lien}`}> Mot de passe oublié ?</Link>
                    </div>

                </form>


            </div>
        </>
    )

}
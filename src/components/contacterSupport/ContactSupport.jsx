import s from "./style.module.css";

export function ContactSupport() {
    return (
        <div className="container mt-5">
            <h1 className={`${s.titre}`}>Contacter le support</h1>
            <form className='mx-3'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3 col-md-10">
                            <label htmlFor="exampleInputEmail1" className="form-label">Votre nom *</label>
                            <input type="name" className="form-control" id="name" />
                        </div>
                        <div className="mb-3 col-md-10">
                            <label htmlFor="exampleInputPassword1" className="form-label">Votre email *</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3 col-12">
                            <label for="exampleFormControlTextarea1" class="form-label">Votre message *</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"
                                placeholder='Envoyez vos suggestions, commentaires, commande de packs SMS ou questions'></textarea>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center"> 
                        <button type="submit" className={`${s.button}`}>Envoyer</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

export function TitreContenu() {
    const [text, setText] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const maxLength = 160;

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleEmojiClick = (emojiObject) => {
        const emoji = emojiObject.emoji;
        setText(prevText => prevText + emoji); 
        setShowEmojiPicker(false); // Fermer le sélecteur d'emojis après sélection
    };

    return (
        <div className="tab-pane fade show active" id="titreContenu">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Type</label>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue>
                        Message (texte + image/PDFs/formulaires pour smartphones/tablette, email)
                    </option>
                    <option value="1">
                        Message court (160 caractères pour smartphones/tablettes, email, SMS)
                    </option>
                </select>
                <div className="mb-3 mt-3">
                    <label htmlFor="textTitre" className="form-label">Titre</label>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            id="textTitre"
                            value={text}
                            onChange={handleChange}
                            maxLength={maxLength}
                            aria-describedby="textHelp"
                        />
                        <button 
                            type="button" 
                            className="btn btn-outline-secondary" 
                            onClick={toggleEmojiPicker} // Activer/désactiver le sélecteur d'emojis
                        >
                            😊
                        </button>
                    </div>
                    {showEmojiPicker && (
                        <div className="emoji-picker">
                            <Picker onEmojiClick={handleEmojiClick} />
                        </div>
                    )}
                    <div id="textHelp" className="form-text">
                        Maximum 160 caractères, reste <span id="charCount">{maxLength - text.length}</span>.
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Contenu</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
    );
}

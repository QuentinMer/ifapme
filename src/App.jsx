import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { ContactSupport } from './components/contacterSupport/ContactSupport';
import { Messages } from './components/message/Messages';
import { Eleves } from './components/eleves/Eleves';
import { Redacteur } from './components/redacteur/Redacteur';
import { NouveauMessage } from './components/nouveauMessage/NouveauMessage';
import { NouvelEleve } from './components/eleves/nouvelEleve/NouvelEleve';
import { NouveauRedacteurForm } from './components/nouveauRedacteur/NouveauRedacteurForm';

export function App() {
    return (
        <div>
            <Router>
                <Navbar />
                
                <Routes>
                    <Route path='/' element={<Messages/>} />
                    <Route path='/messages' element={<Messages/>} />
                    <Route path='/redacteurs' element={<Redacteur/>} />
                    <Route path="/nouveau-redacteur" element={<NouveauRedacteurForm />} />
                    <Route path="/support-contact" element={<ContactSupport />} />
                    <Route path="/messages/nouveau-message" element={<NouveauMessage/>}/>
                    <Route path='/eleves' element={<Eleves/>}/>
                    <Route path='/eleves/nouveau-eleve' element={<NouvelEleve/>}/>

                </Routes>
            </Router>
        </div>
    );
}

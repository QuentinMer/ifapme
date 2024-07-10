import { Modal, Button } from 'react-bootstrap'; 

export function ClocheModale({ show, onHide }) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Quoi de neuf?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>exemples et news </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onHide}>
                    Fermer
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

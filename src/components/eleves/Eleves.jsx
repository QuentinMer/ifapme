// frontend/src/components/eleves/Eleves.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import s from "./style.module.css";
import { getEleves } from "../services/eleveService";

export function Eleves() {
  const [eleves, setEleves] = useState([]);
  const [selectedEleves, setSelectedEleves] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [elevesPerPage] = useState(20);

  useEffect(() => {
    const fetchEleves = async () => {
      try {
        const data = await getEleves();
        setEleves(data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des élèves !', error);
      }
    };
    fetchEleves();
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedEleves(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(eleveId => eleveId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleSelectAllChange = () => {
    setSelectAll(prevSelectAll => {
      const newSelectAll = !prevSelectAll;
      setSelectedEleves(newSelectAll ? eleves.map(eleve => eleve.id_eleve) : []);
      return newSelectAll;
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setCurrentPage(1);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    setCurrentPage(1);
  };

  const filteredEleves = eleves.filter(eleve => 
    (eleve.nom_eleve.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eleve.prenom_eleve.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eleve.classe_eleve.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eleve.titulaire_eleve.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredByDate = filteredEleves.filter(eleve => {
    const eleveDate = new Date(eleve.date_creation);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (start && end) {
      return eleveDate >= start && eleveDate <= end;
    } else if (start) {
      return eleveDate >= start;
    } else if (end) {
      return eleveDate <= end;
    } else {
      return true;
    }
  });

  const indexOfLastEleve = currentPage * elevesPerPage;
  const indexOfFirstEleve = indexOfLastEleve - elevesPerPage;
  const currentEleves = filteredByDate.slice(indexOfFirstEleve, indexOfLastEleve);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <h1 className={`${s.titre}`}>Elèves</h1>
        </div>
        <div className="col-4 offset-2">
          <Link to="/eleves/nouveau-eleve">
            <button className={`${s.button}`}>Nouvel élève</button>
          </Link>
        </div>
      </div>
      <hr className={`${s.hr}`} />
      <div className="row mt-3">
        <div className="table-responsive col-md-8">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="selectAll"
                    onChange={handleSelectAllChange}
                    checked={selectAll}
                  />
                </th>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>
                <th scope="col">Classe</th>
                <th scope="col">Titulaire</th>
                <th scope="col">Code</th>
              </tr>
            </thead>
            <tbody>
              {currentEleves.map((eleve) => (
                <tr key={eleve.id_eleve}>
                  <td>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedEleves.includes(eleve.id_eleve)}
                      onChange={() => handleCheckboxChange(eleve.id_eleve)}
                    />
                  </td>
                  <td>{eleve.nom_eleve}</td>
                  <td>{eleve.prenom_eleve}</td>
                  <td>{eleve.classe_eleve}</td>
                  <td>{eleve.titulaire_eleve}</td>
                  <td>{eleve.code_eleve}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav className="mt-3">
            <ul className="pagination justify-content-center">
              {Array.from({ length: Math.ceil(filteredByDate.length / elevesPerPage) }).map((_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button onClick={() => paginate(index + 1)} className="page-link">{index + 1}</button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="col-md-4">
          <form>
            <div className="mb-3">
              <label htmlFor="searchInput" className="form-label">
                {selectedEleves.length} élève(s) sélectionné(s) Total : {eleves.length} 
              </label>
              <input
                type="text"
                className="form-control"
                id="searchInput"
                aria-describedby="searchHelp"
                placeholder="Recherche par nom/prénom"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                onChange={handleSelectAllChange}
                checked={selectAll}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">Tous les élèves</label>
            </div>
            <div className="mb-3">
              <label htmlFor="startDateInput" className="form-label">
                Date de début
              </label>
              <input
                type="date"
                className="form-control"
                id="startDateInput"
                aria-describedby="startDateHelp"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endDateInput" className="form-label">
                Date de fin
              </label>
              <input
                type="date"
                className="form-control"
                id="endDateInput"
                aria-describedby="endDateHelp"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

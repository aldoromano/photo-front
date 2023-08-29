import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Classer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const LoadData = async () => {
        const response = await axios.get("http://localhost:4000/photos");

        setData(response.data);
        setIsLoading(false);
      };

      LoadData();
    } catch (error) {
      console.log("Erreur détectée ->> ", error.message);
    }
  }, []);

  const handleSelection = () => {
    // Les checkbox de sélection
    var markedCheckbox = document.getElementsByName("select");
    // Le tableau contenant les fichiers sélectionnés
    const tblSelect = [];
    // La boucle sur les checkbox
    for (var checkbox of markedCheckbox) {
      // Si sélection : on stocke le fichier dans le tableau
      if (checkbox.checked) {
        tblSelect.push(checkbox.value);
      }
    }
    const tblData = data.filter((elem) => tblSelect.includes(elem.file));

    navigate("/affecter-critere", {
      state: {
        data: tblData,
      },
    });
  };
  const navigate = useNavigate(); // rappel

  return isLoading ? null : (
    <div className="container">
      <h1>Classer un élément</h1>
      <input
        type="button"
        value="Classer les éléments sélectionnés"
        onClick={() => {
          handleSelection();
        }}
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="row">#</th>
            <th scope="row">Sélection</th>
            <th scope="row">Fichier</th>
            <th scope="row">Taille</th>
            <th scope="row">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="checkbox"
                    name="select"
                    id={"choix-" + index}
                    value={elem.file}
                  />
                </td>
                <td>{elem.file}</td>
                <td>{elem.size}</td>
                <td>{elem.date.substring(0, 9)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Classer;

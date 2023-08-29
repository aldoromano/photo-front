import { useEffect, useState } from "react";
import axios from "axios";
const Criterias = ({ data, setData, newData, setNewData, tblId, setTblId }) => {
  const [isLoading, setIsLoading] = useState(true);
  //const [data, setData] = useState([]);
  //const [newData, setNewData] = useState([]);
  //const [tblId, setTblId] = useState([]);
  const [counter, setCounter] = useState(0);
  // Affichage du composant si changement : 1) de l'arborescence, 2) de la sélection de critère
  useEffect(() => {
    try {
      setIsLoading(true);
      const LoadData = async () => {
        const response = await axios.put(
          "http://localhost:4000/criterias-update",
          {
            arrayForm: newData,
            arrayCheck: tblId,
          }
        );

        setData(response.data);
      };

      LoadData();
      setIsLoading(false);
    } catch (error) {
      console.log("Erreur détectée ->> ", error.message);
    }
  }, [newData, tblId]);

  // Gestion de l'affichage/masquage des sous-critères
  const handleExpand = (nodeId) => {
    const copyData = data.map((elem, index) => {
      if (elem.nodeId === nodeId) {
        elem.childVisibility = !elem.childVisibility;
      }
      return elem;
    });
    setCounter(counter + 1);
    setNewData(copyData);
  };

  // Sélection d'un critère
  const handleSelect = (nodeId) => {
    let tbl = [...tblId];

    if (!tblId.includes(nodeId)) {
      tbl.push(nodeId);
    } else {
      tbl = tblId.filter((elem) => elem !== nodeId);
    }
    setTblId(tbl);
  };

  return isLoading ? (
    <div>Chargement en cours ... </div>
  ) : (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="row">#</th>
          <th scope="row">Sélection</th>
          <th scope="row">Critère 1</th>
          <th scope="row">Critère 2</th>
          <th scope="row">Critère 3</th>
          <th scope="row">Critère 4</th>
        </tr>
      </thead>
      <tbody>
        {data.map((elem, index) => {
          return elem.columnNumber === 1 ? null : (
            <tr key={index}>
              <td>{index + 1}</td>

              <td>
                <input
                  type="input"
                  id={"choix-" + index}
                  onClick={() => handleSelect(elem.nodeId)}
                  style={{
                    backgroundColor: elem.isSelected ? "green" : "white",
                    width: 15,
                    height: 15,
                    color: "grey",
                    cursor: "pointer",
                  }}
                />
              </td>
              <td>
                {elem.columnNumber === 2 && elem.nodeType === "NODE" && (
                  <span
                    onClick={() => handleExpand(elem.nodeId)}
                    className="aff-cri-span-expand"
                  >
                    <b>{elem.childVisibility ? "v" : ">"}</b>
                  </span>
                )}
                {elem.columnNumber === 2
                  ? elem.nodeType === "NODE" && elem.nodeName
                  : null}
              </td>
              <td>
                {elem.columnNumber === 3 && elem.nodeType === "NODE" && (
                  <span
                    onClick={() => handleExpand(elem.nodeId)}
                    className="aff-cri-span-expand"
                  >
                    <b>{elem.childVisibility ? "v" : ">"}</b>
                  </span>
                )}
                {elem.columnNumber === 3 ? elem.nodeName : null}
              </td>

              <td>
                {elem.columnNumber === 4 && elem.nodeType === "NODE" && (
                  <span
                    onClick={() => handleExpand(elem.nodeId)}
                    className="aff-cri-span-expand"
                  >
                    <b>{elem.childVisibility ? "v" : ">"}</b>
                  </span>
                )}
                {elem.columnNumber === 4 ? elem.nodeName : null}
              </td>
              <td>
                {elem.columnNumber === 5 && elem.nodeType === "NODE" && (
                  <span
                    onClick={() => handleExpand(elem.nodeId)}
                    className="aff-cri-span-expand"
                  >
                    <b>{elem.childVisibility ? "v" : ">"}</b>
                  </span>
                )}
                {elem.columnNumber === 5 ? elem.nodeName : null}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Criterias;

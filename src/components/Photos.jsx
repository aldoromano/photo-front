import { useState } from "react";

const Photos = ({ classifiedPhotosArray }) => {
  const [isLoading, setIsLoading] = useState(false);

  return isLoading ? (
    <div>Chargement en cours </div>
  ) : (
    <div>
      <table className="table table-striped table-hover">
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
          {classifiedPhotosArray.map((elem, index) => {
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
                <td>{elem.name}</td>
                <td>{elem.size}</td>
                <td>{elem.dateFile.substring(0, 9)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Photos;

import { useEffect, useState } from "react";
import axios from "axios";
import Photos from "./Photos";
import Criterias from "./Criterias";

const Consulter = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [tblId, setTblId] = useState([]);
  const [fileData, setFileData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = () => {
    console.log("TblId -> ", tblId);

    try {
      setIsLoading(true);
      const searchPhotos = async () => {
        const response = await axios.put(
          "http://localhost:4000/classified-photo",
          {
            arrayCheck: tblId,
          }
        );
        setFileData(response.data);
      };
      searchPhotos();
      setIsLoading(false);
    } catch (error) {
      console.log("Erreur détectée ->> ", error.message);
    }
  };

  return isLoading ? (
    <div>Chargement en cours .... </div>
  ) : (
    <div className="container">
      <input
        type="button"
        className="btn btn-primary"
        value="Rechercher"
        onClick={() => {
          handleSelect();
        }}
      />
      <Criterias
        data={data}
        setData={setData}
        newData={newData}
        setNewData={setNewData}
        tblId={tblId}
        setTblId={setTblId}
      ></Criterias>
      <Photos classifiedPhotosArray={fileData}></Photos>
    </div>
  );
};

export default Consulter;

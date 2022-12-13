import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
function ModalForEdit({ id }) {
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://localhost:44326/api/stok/GetAllKutuphane",

        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  const kitapEdit = data.map((data) => {
    return data.id === id;
  });
  console.log(kitapEdit);
  return (
    <Modal show={isOpen}>
      <Modal.Body>
        <button
          onClick={() => {
            setIsOpen(false);
          }}
        ></button>
      </Modal.Body>
    </Modal>
  );
}

export default ModalForEdit;

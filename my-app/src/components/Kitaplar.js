import Liste from "./Liste";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Kitaplar.css";
import NavBar from "./Navbar";
import ModalForEdit from "./ModalForEdit";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Kitaplar = () => {
  const [id, setId] = useState();
  const [duzenle, setDuzenle] = useState(false);
  const [yeniEleman, setYeniEleman] = useState("");

  function clickHandlerYeni(e) {
    setYeniEleman(e.target.value);
  }
  const [data, setData] = useState([]);
  const [yazarData, setYazarData] = useState([]);
  const [yazarId, setYazarId] = useState([]);

  const [updateName, setUpdateName] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://localhost:7066/api/book",

      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    setData(response.data);
  };
  const fetchYazarData = async () => {
    const response = await axios.get(
      "https://localhost:7066/api/author",

      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    const options = response.data.map((x) => {
      return {
        value: x.id,
        label: x.name,
      };
    });
    setYazarData(options);
    console.log("Yazar data", options);
  };
  useEffect(() => {
    fetchData();
    fetchYazarData();
  }, []);

  return (
    <div>
      <NavBar />

      <table>
        <tbody className="sutun-baslik">
          <tr>
            <td className="sutun-baslik">Kitaplar</td>
          </tr>
          {data.map((data) => {
            return (
              <tr>
                <td>
                  {data.name}
                  {window.name === "admin" && (
                    <>
                      <button
                        onClick={() => {
                          setDuzenle(true);
                          setId(data.id);
                        }}
                      >
                        Duzenle
                      </button>
                      <button
                        onClick={async () => {
                          const response = await axios.delete(
                            "https://localhost:7066/api/Book/" + data.id,
                            {
                              headers: {
                                accept: "text/plain",
                              },
                            }
                          );
                          fetchData();
                        }}
                      >
                        Sil
                      </button>
                    </>
                  )}

                  {duzenle && data.id == id && (
                    <div>
                      <input
                        type="text"
                        onChange={(x) => {
                          setUpdateName(x.target.value);
                        }}
                      ></input>
                      <button
                        onClick={async () => {
                          const response = await axios.put(
                            "https://localhost:7066/api/Book/" + data.id,

                            updateName,

                            {
                              headers: {
                                accept: "text/plain",
                                "Content-Type": "application/json",
                              },
                            }
                          );
                          setDuzenle(false);
                          fetchData();
                        }}
                      >
                        Kaydet
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {window.name == "admin" && (
        <>
          <div style={{ width: 300, marginLeft: 490 }}>
            <Dropdown
              options={yazarData}
              onChange={(x) => {
                console.log(x);
                setYazarId(x.value);
              }}
              placeholder="Yazar seciniz"
            />
          </div>
          <div style={{ marginLeft: 480 }}>
            Kitap Adı
            <input type="text" onChange={clickHandlerYeni}></input>
          </div>
          <button
            style={{ marginLeft: 600 }}
            onClick={async () => {
              const response = await axios.post(
                "https://localhost:7066/api/book",
                // '{\n  "name": "AAAA"\n}',
                {
                  name: yeniEleman,
                  authorId: yazarId,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    mode: "cors",
                  },
                }
              );
              fetchData();
            }}
          >
            Ekle
          </button>
        </>
      )}
    </div>
  );
};
export default Kitaplar;

import Liste from "./Liste";
import React, { useEffect, useState } from "react";
import axios from "axios";

import NavBar from "./Navbar";
const Yazarlar = () => {
  const [id, setId] = useState();

  const [duzenle, setDuzenle] = useState(false);
  const [yeniEleman, setYeniEleman] = useState("");
  const [updateName, setUpdateName] = useState("");

  function clickHandlerYeni(e) {
    setYeniEleman(e.target.value);
  }
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      "https://localhost:7066/api/author",

      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          mode: "cors",
        },

        body: JSON.stringify(data),
      }
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <NavBar />
      <table>
        <tbody className="sutun-baslik">
          <tr>
            <td className="sutun-baslik">Yazarlar</td>
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
                            "https://localhost:7066/api/author/" + data.id,
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
                            "https://localhost:7066/api/Author/" + data.id,

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
        <div style={{ marginLeft: 400 }}>
          Yazar Ekle
          <input type="text" onChange={clickHandlerYeni}></input>
          <button
            onClick={async () => {
              const response = await axios.post(
                "https://localhost:7066/api/Author",
                // '{\n  "name": "AAAA"\n}',
                {
                  name: yeniEleman,
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
        </div>
      )}
    </div>
  );
};
export default Yazarlar;

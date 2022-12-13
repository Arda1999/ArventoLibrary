import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";
import "./Dashboard.css";
import { json } from "react-router-dom";
import { Console } from "@blueprintjs/icons/lib/esm/generated/16px/paths";
import axios from "axios";
function Dashboard() {
  const [data, setData] = useState([]);
  const [yazarData, setYazarData] = useState([]);
  useEffect(() => {
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
      console.log(response.data);
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
      setYazarData(response.data);
      console.log(response.data);
    };
    fetchData();
    fetchYazarData();
  }, []);
  return (
    <div>
      <NavBar />
      <div>
        <h1 style={{ textAlign: "center" }}> Ana Sayfaya Hoş Geldiniz</h1>
        <hr size="6" noshade color="green" />
      </div>

      <div className="table-div">
        <table>
          <tbody>
            <tr>
              <td className="sutun-baslik">Kitaplar</td>
            </tr>

            {data.map((data) => {
              return (
                <tr>
                  <td>{data.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td className="sutun-baslik">Yazarlar </td>
            </tr>

            {yazarData.map((data) => {
              return (
                <tr>
                  <td>{data.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h3 style={{ marginLeft: 550, color: "#fff" }}>
        {" "}
        Kitaplar Sayisi = {data.length}
      </h3>
    </div>
  );
}
export default Dashboard;

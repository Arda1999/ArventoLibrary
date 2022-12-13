import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LoginStyle.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Kitaplar from "./Kitaplar";
import Yazarlar from "./Yazarlar";

function Login() {
  const navigate = useNavigate();
  const [kullanici, setKullanici] = useState("");
  const [sifre, setSifre] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(kullanici);
  };
  function clickHandlerKullanici(e) {
    setKullanici(e.target.value);
  }
  function clickHandlerSifre(e) {
    setSifre(e.target.value);
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://localhost:7066/api/users",

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
    fetchData();
  }, []);
  const sifreler = data.map((data) => {
    return data.password;
  });
  const kullaniciAdlari = data.map((data) => {
    return data.username;
  });
  const passScreen = () => {
    if (kullanici === kullaniciAdlari[0] && sifre === sifreler[0]) {
      window.name = kullaniciAdlari[0];
      navigate("/Dashboard");
    } else if (kullanici === kullaniciAdlari[1] && sifre === sifreler[1]) {
      window.name = kullaniciAdlari[1];
      navigate("/Dashboard");
    } else {
      alert("Kullanıcı Adı veya Şifre Hatalı Tekrar Deneyiniz !!");
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <label for="kullanici"> Kullanıcı Adı</label>
          <input
            value={kullanici}
            onChange={clickHandlerKullanici}
            type="input"
            placeholder="Kullanıcı Adı Giriniz"
            required
          ></input>
          <label for="password">Şifre Giriniz</label>
          <input
            value={sifre}
            onChange={clickHandlerSifre}
            type="password"
            placeholder="Şifre Giriniz"
            required
          ></input>
          <button type="submit" onClick={passScreen}>
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

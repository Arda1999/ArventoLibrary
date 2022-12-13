import { StepBackward } from "@blueprintjs/icons/lib/esm/generated/16px/paths";
import React, { useState } from "react";
import "./Liste.css";
const Liste = () => {
  const [eleman, setEleman] = useState([]);
  const [yeniEleman, setYeniEleman] = useState("");
  const [duzenle, setDuzenle] = useState(false);
  function clickHandlerYeni(e) {
    setYeniEleman(e.target.value);
  }
  console.log(duzenle);
  return (
    <div>
      {duzenle && <input type="text" onChange={clickHandlerYeni}></input>}
      <button
        onClick={() => {
          setDuzenle(true);
        }}
      >
        Düzenle
      </button>

      <button>Sil</button>
    </div>
  );
};
export default Liste;

import "../../assets/styles/biografia/biografia.css";
import anibal from "./anibal.png";
import camila from "./camila.png";
import danilo from "./danilo.png";
import gonzalo from "./gonzalo.png";
import rocio from "./rocio.png";
import anibal_card from "./anibal_card.png";
import camila_card from "./camila_card.png";
import danilo_card from "./danilo_card.png";
import gonzalo_card from "./gonzalo_card.png";
import rocio_card from "./rocio_card.png";
import {motion} from 'framer-motion'

import { useState } from "react";

const data = [
  {
    id: 1,
    nombre: "Camila López",
    edad: 13,
    perfil: camila,
    card: camila_card,
  },
  {
    id: 2,
    nombre: "Danilo Sansone",
    edad: 13,
    perfil: danilo,
    card: danilo_card,
  },
  {
    id: 3,
    nombre: "Gonzalo Domínguez",
    edad: 14,
    perfil: gonzalo,
    card: gonzalo_card,
  },
  {
    id: 4,
    nombre: "Rocío Quagliarello",
    edad: 13,
    perfil: rocio,
    card: rocio_card,
  },
  {
    id: 5,
    nombre: "Aníbal Suárez",
    edad: 22,
    perfil: anibal,
    card: anibal_card,
  },
];

export const Biografia = () => {
  const [showCard, setShowCard] = useState(false);
  const [card, setCard] = useState({
    id: 0,
    nombre: "",
    edad: 0,
    perfil: "",
    card: "",
  });

  const handleClick = (item) => {
    setCard(item);
    setShowCard(true);
  }

  return (
    <motion.section className="sectionBiografiaContainer">
      <h2 className="sectionBiografiaTitle">Los chicos</h2>
      <motion.div className="sectionBiografiaContenido" initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
        <motion.div className={`sectionBiografiaPerfiles ${showCard ? 'column' : 'row'}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {data.map((item) => (
          <div key={item.id} className={`sectionBiografiaPerfil ${showCard ? 'mitad' : ''}`} 
          onClick={() => handleClick(item)}>
            <img
              src={item.perfil}
              alt=""
              className={`sectionBiografiaProfileImg ${showCard ? 'show' : 'hide'}` }
            />
            <h3 className="sectionBiografiaProfileTitle">{item.nombre}</h3>
          </div>
        ))}
        </motion.div>
        
        {showCard && (
          <motion.div className="sectionBiografiaCard mitad" initial={{ opacity: 0 }} animate={{ opacity: 1 } }>
            <img src={card.card} alt="" className="sectionBiografiaCardImg" />
            <h3 className="sectionBiografiaCardTitle">{card.nombre}</h3>
            <p className="sectionBiografiaCardParrafo">Edad: {card.edad}</p>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
};

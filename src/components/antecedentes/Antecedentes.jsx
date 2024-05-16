import "../../assets/styles/antecedentes/antecedentes.css";
import imagenAntecedentes from "./2.jpg";
export const Antecedentes = () => {
  return (
    <section className="sectionAntecedentesContainer">
      <div className="sectionAntecedentesContenido">
        <h2 className="sectionAntecedentesTitle">Antecedentes de los hechos</h2>
        <p className="sectionAntecedentesParrafo">
          En San Miguel del Monte, provincia de Buenos Aires el 20 de mayo del
          2019, unos amigos, Danilo, Gonzalo, Camila y Rocío se habían juntado
          en la plaza a pasar un rato, como hacen muchos de los adolescentes de
          nuestro pueblo, a charlar, rapear y andar en skate… Un rato más tarde
          se subieron al auto de Aníbal a dar vueltas por la laguna y la ciudad.
          Un patrullero comienza a seguirlos en el barrio Montemar y otro
          patrullero bloquea la calle y comienza a disparar contra el auto. Una
          de las balas hiere a Gonzalo, a causa de esta persecución el auto
          choca con el acoplado de un camión estacionado y cuatro de los chicos
          fallecen.
        </p>
      </div>
      <div className="sectionAntecedentesImagen">
        <img src={imagenAntecedentes} alt="" className="sectionAntecedentesImg" />
      </div>
    </section>
  );
};

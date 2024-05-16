import "../../assets/styles/titulo/titulo.css";
import { motion } from "framer-motion"
export const Titulo = () => {
  return (
    <motion.section className="sectionTituloContainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="sectionTituloContenido" >
        <motion.h1 className="sectionTitulo" initial={{ translateX: "-100%" }} animate={{ translateX: 0 }}>
        Caso: Masacre De Monte
        </motion.h1>
        <motion.p className="sectionSubtitulo" initial={{ translateX: "100%" }} animate={{ translateX: 0 }}>Fines</motion.p>
      </div>
    </motion.section>
  );
};

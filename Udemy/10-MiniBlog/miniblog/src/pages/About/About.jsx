//CSS
import styles from "./About.module.css";
//Routes
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Moni <span>Blog</span></h2>
      <p>Este Projeto consiste em um blog feito em React no front-end e Firebase no back-end</p>
    <Link to="/posts/create" className="btn">Criar Post</Link>
    </div>
  );
};

export default About;

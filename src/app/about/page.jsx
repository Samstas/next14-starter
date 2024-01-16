import Image from "next/image";
import styles from "./about.module.scss";

function AboutPage() {
  return (
    <section className={styles.container}>
      {/* left side with text  */}
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>

        {/* list of experience  */}
        <ul className={styles.boxes}>
          <li className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </li>
          <li className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </li>
          <li className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </li>
        </ul>
      </div>

      {/* right side with image  */}
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </section>
  );
}

export default AboutPage;

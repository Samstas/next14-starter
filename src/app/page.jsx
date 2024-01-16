import styles from "./home.module.scss";
import Image from "next/image";

function Home() {
  return (
    <section className={styles.container}>
      {/* left side of hero part  */}
      <div className={styles.textContainer}>
        {/* text part  */}
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          nihil doloribus aspernatur consequatur esse? Minima.
        </p>
        {/* buttons */}
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        {/* companies  */}
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      {/* right side of hero part  */}
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </section>
  );
}

export default Home;

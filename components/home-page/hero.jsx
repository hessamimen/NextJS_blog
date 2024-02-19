import Image from "next/image";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hessam.jpeg"
          alt="Hessam's photo"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Hessam</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        and Next Js
      </p>
    </section>
  );
}
export default Hero;

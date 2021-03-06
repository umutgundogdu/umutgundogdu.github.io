import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import umut from "./assets/img/umut.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Umut Gündoğdu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <main className={styles.main}>
        <Image
          style={{ borderRadius: "50%" }}
          height="200"
          width="200"
          src={umut}
          alt=""
        />
        <h1 className={styles.title}>Umut Gündoğdu</h1>
        <p className={styles.description}>Full Stack Developer</p>
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/umutgundgdu/"
            target="_blank"
            className={styles.icon}
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.twitter.com/umutgundgdu/"
            target="_blank"
            className={styles.icon}
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.github.com/umutgundogdu/"
            target="_blank"
            className={styles.icon}
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <a className={styles.skil} href="mailto:umutgndgduu@gmail.com">
          <svg>
            <rect></rect>
          </svg>
          Email
        </a>
      </main>

      <div className={styles.github}>
        <a href="https://github.com/umutgundogdu">
          github<i className="fa-brands fa-github text-secondary ms-1"></i>
        </a>
      </div>
    </div>
  );
}

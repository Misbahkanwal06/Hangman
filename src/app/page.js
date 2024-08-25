// import Image from "next/image";
import styles from "./page.module.css";
import Main from "./component/Main";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <main className={styles.main}>
       <Main/>
    </main>
  );
}

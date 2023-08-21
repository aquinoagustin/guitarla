import Image from "next/image";
import styles from "../styles/nosotros.module.css";
import Layout from "../components/layout";
export default function Nosotros() {
  return (
    <Layout name="Nosotros" description="Sobre nosotros el Blog">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is by
              Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H.
              Rackham.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

import Layout from "./components/layout";
import Guitarra from "./components/guitarra";
import styles from '../styles/grid.module.css'
export default function Tienda({guitarras}) {
  console.log(guitarras)
  return (
    <div >
      <Layout title="Tienda Virtual" description='Tienda virtual, venta de guitarras'>
        <main className="contenedor">
          <h1 className="heading">Nuestra Coleccion</h1>
          <div className={styles.grid}>
          {
            guitarras.map((guitarra)=>(
              
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes}/>
            ))
          }
          </div>
        </main>
      </Layout>
    </div>
  )
}
// ESTO ES DE FORMA ESTATICA, HAY QUE HACER UN BUILD PARA CARGAR DATOS
export async function getStaticProps(){
  const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data:guitarras} = await res.json()
  console.log(guitarras)
  return{
    props:{
      guitarras
    },
  }
}
// ESTO ES DE FORMA DINAMICA, SE ACTUALIZA 

// export async function getServerSideProps(){
//   const rest = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//   const {data:guitarras} = await rest.json()
//   return{
//     props:{
//       guitarras
//     }
//   }
// }
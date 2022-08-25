import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  try {
    const response = await fetch('http://localhost:8080/api/v1/products');
  
    const json = await response.json();
  
    const products = json.data.products;
  
    return {
      props: { products }
    };
  } catch (error) {
    return {
      props: { products: [] }
    };
  }
}

const Home: NextPage = ({ products }: any) => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>

      <main>
        <header className={styles.header}>
          <span className={styles.text}>Products</span>
        </header>

        <div className={styles.container}>
          {products.map((item: any) => (
            <div key={item.id} className={styles.card}>
              <img
                src={item.image}
                alt="imagem product"
                className={styles.image}
              />
              <p className={styles.info}>{item.name}</p>
              <p className={styles.info}>{item.brand}</p>
              <p className={styles.price}>R$ {item.price}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Home

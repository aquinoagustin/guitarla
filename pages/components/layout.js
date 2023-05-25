import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
export default function Layout({children,title='',description=''}){
    return(
        <>
            <Head>
                <title>{`GuitarLA - ${title}`}</title>
                <meta name="description" content={description}></meta>
            </Head>
            <Header/>
            <h1>Desde Layout</h1>
            {children}
            <Footer/>
        </>
    )
}
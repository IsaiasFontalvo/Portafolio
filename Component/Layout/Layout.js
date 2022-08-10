import Header from "../Header";
import { Container } from "semantic-ui-react";
import Footer from "../Footer"
export default function Layout(props) {
    
 const {children} =props;

 
 return (
    <main>
    <Header />

    <Container >
       <h1>hola mundo</h1> Layout
       {children}
       </Container>
        <Footer/>
        
    </main>
  )
}

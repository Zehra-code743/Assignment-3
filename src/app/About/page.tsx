import Image  from "next/image"
import Header from "../Components/Header"



export default function About(){
    return(
        <div>
            <Header>
            
                
                
            </Header>
            <h1>This is my about us Page</h1>
            <section className="contact">
                
                    <div className="aipic">
                        <Image src={"/ai.png"} alt="about" height={400} width={400}/>
                </div>
                
                
            </section>
    
        </div>  
            
            
            
    )
}
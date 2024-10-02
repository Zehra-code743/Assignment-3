import Image from "next/image";
import Header from"../Components/Header"


export default function Portfolio(){
    return(
        <div>
            <Header>

            </Header>
            <h1>This is my Portfolio Page</h1>
            <section className="contact">
            
            
            <div className="artificialpic">
                <Image src="/artificial.png" alt="portfolio" height={400} width={400}/>

                
</div>

</section>

</div>
            
            
    )
}
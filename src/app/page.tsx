import Image from "next/image"
import Header from "./Components/Header"

export default function Home(){
  return(
    <div>
      <div>
        <Header />
      </div>
        
        <div className="contaner">
         <div className="intro">
          <h1>Hellow Friends, <br/>I am Shan-e-zehra</h1>
          <p>I am student of GIAC <br/>Next.js Developer</p>

      
          </div>
          <div className="profilePic">
            <Image src={"/profile.png"} alt="profile" height={400} width={400}/>
          </div>
        </div>
    </div>
  )
}
import Link from "next/link"


export default function Contact(){
    return(
        <div>
            <section className="contact">
                <form>
                    <h2>contact form</h2>
                    <div className="input-box">
                        <label>Full Name</label>
                        <input type="text" className="field" placeholder="Enter your name" required/>
                    </div>
                    <div className="input-box">
                        <label> Email Address</label>
                        <input type="email" className="field" placeholder="Enter Your name"/>
                        </div>
                        <div className="input-box">
                            <label>Your Message</label>
                            <textarea name="" id="" placeholder="Enter Your message" required></textarea>
                        </div>
                        <button />
                </form>
            </section>
            </div>
    )
}
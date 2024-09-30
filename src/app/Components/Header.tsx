import Link from "next/link"

export default function Header(){
    return(
        <div className="header">
            <ul className="header-button">
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/Portfolio"}><li>Portfolio</li></Link>
                <Link href={"/About"}><li>About us</li></Link>
                <Link href={"Contact-us"}><li>Contact us</li></Link>
                </ul>
                </div>)
}
                
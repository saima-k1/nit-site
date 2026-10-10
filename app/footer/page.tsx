import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <footer className="MainFooter">
            <div className="FooterKontakt">
                <div className="FooterKontaktTitle">
                    <h3 className="FooterKontaktTitle1">Spremni za jednostavnu budućnost?</h3>
                    <h1 className="FooterKontaktTitle2">Krenimo onda!</h1>
                </div>
                <div className="FooterKontaktButton">
                    <Link href="/kontakt">
                        <button className="FooterButton">Kontaktirajte nas</button>
                    </Link>
                </div>
            </div>
            <div className="FooterLogo">
                <div className="FooterLogo1">
                    <div className="FooterPic">
                        <Link href="/">
                            <Image
                            className="FooterPicture" 
                            src="/Images/NitLogo.jpg" 
                            alt="Author" 
                            width={500}
                            height={500} 
                            />
                        </Link>
                    </div>
                    <p className="FooterText1">Inkubacija - Stvaranje odgovarajućeg okruženja za razvoj novih startapova</p>
                </div>
                <div className="FooterLogo2">
                    <h3 className="FooterText2">Budite obavešteni o svim dešavanjima</h3>
                    <p className="FooterText3">Ne brinite, nećemo biti dosadni.</p>
                </div>
            </div>
        </footer>
    )
}

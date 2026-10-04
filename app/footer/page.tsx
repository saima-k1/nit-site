import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <footer className="MainFooter">
            <div className="FooterKontakt">

            </div>
            <div className="FooterLogo">
                <div className="FooterLogo1">
                    <div className="FooterPic">
                        <Link href="/">
                            <Image
                            className="BarPicture" 
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

                </div>
            </div>
        </footer>
    )
}

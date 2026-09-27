import Image from "next/image";
// import "./globals.css";
import Link from "next/link";

export default function Kontakt(){
    return(
        <div className="MainContactDiv">
            <div className="ContactTexts">
                <p className="ContactText1">Kontaktirajte Nas</p>
                <h2 className="ContactTitle1">Zajedno kreirajmo napredak za sjajan posao i super ideje</h2>
            </div>
            <div>
                <div className="Adress">
                    <div className="AdressPic"></div>
                    <h6 className="ContactTitle2">Naš centar :</h6>
                    <ol className="ContactList">
                        <li className="ContactList1">Ulica Stevana Nemanje br 2, Novi Pazar</li>
                        <li className="ContactList2">Osmana Dervišnurovića 33, Novi Pazar</li>
                    </ol>
                </div>
                <div className="Email">
                    <div className="EmailPic"></div>
                    <h6 className="ContactTitle3">Naša email adresa:</h6>
                    <p className="ContactText2">office@centarnit.com</p>
                </div>
                <div className="Contact">
                    <div className="ContactPic"></div>
                    <h6 className="ContactTitle3">Kontakt brojevi:</h6>
                    <p className="ContactText3">+381600390702</p>
                    <p className="ContactText4">+381 603907000</p>
                </div>
            </div>
        </div>
    )
}
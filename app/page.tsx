import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import Kontakt from "./kontakt/page";
import ONama from "./o-nama/page";
import Inkubator from "./inkubator/page";
import { Libertinus_Keyboard } from "next/font/google";

export default function Page(){
    return(
        <div className="HomeDiv">
        <div className="mainDiv">
            <div className="Texts">
                <h3 className="Title1">🧠 Kurs programiranja za osnovce</h3>
                <div className="BigText1">
                    <p className="Text1">Otključaj moć svog uma i nauči da stvaraš – ne samo da koristiš tehnologiju!</p>
                    <p className="Text2">Na našem kursu programiranja, učenici osnovnih škola kroz zabavu i praktičan 
                    rad uče osnove logičkog razmišljanja, kodiranja i digitalne kreativnosti.</p>
                </div>
                <div className="BigText2">
                    <p className="Text3">💡 Šta deca dobijaju?</p>
                    <p className="Text4">Razvijaju logičko i kreativno razmišljanje</p>
                    <p className="Text5">Uče da rešavaju probleme na zanimljiv način</p>
                    <p className="Text6">Stiču osnovno znanje iz programskih jezika ( Python, HTML, CSS i dr.)</p>
                    <p className="Text7">Rade u malim grupama uz podršku mentora</p>
                    <p className="Text8">Broj mesta je ograničen – prijavi se na vreme i postani mladi programer budućnosti!</p>
                </div>
                <div className="Button">
                    <button className="button">Prijavi se</button>
                </div>
            </div>
            <div className="Pic">
                <Image
                className="Picture" 
                src="/Images/nit_kurs.jpg" 
                alt="Author" 
                width={500}
                height={500} 
                />
            </div> 
        </div>
        <div>
        <div className="Kursevi">
            <div className="ObukeKursevi">
                <h3 className="KursMain">Obuke i kursevi</h3>
                <p className="Kurs1">C# osnove</p>
                <p className="Kurs2">Blazor web apps</p>
                <p className="Kurs3">Organizacija online prodaje</p>
                <p className="Kurs4">ASP.Net C# osnove</p>
                <p className="Kurs5">Angular .JS</p>
                <p className="Kurs6">Vue .JS</p>
                <p className="Kurs7">Python osnove</p>
                <p className="Kurs8">IT za sve</p>
                <p className="Kurs9">IT camp</p>
            </div>
            <div className="Inkubator">
                <h3 className="InkubatorMain">Inkubator</h3>
                <p className="Inkubator1">BusSharp</p>
                <p className="Inkubator2">BauSharp</p>
                <p className="Inkubator3">Klinika</p>
                <p className="Inkubator4">Ikresoft</p>
                <p className="Inkubator5">REZ studio</p>
                <p className="Inkubator6">8 cicle</p>
            </div>
            <div className="ITZajednica">
                <h3 className="ZajednicaMain">IT Zajednica</h3>
                <p className="Zajednica1">Meetup druzenja</p>
                <p className="Zajednica2">Radionice sa developerima</p>
                <p className="Zajednica3">Aktuelizacija IT zajednice</p>
                <p className="Zajednica4">Postavljanje novih trendova</p>
                <p className="Zajednica5">Popularizacija IT medju decom i mladima</p>
            </div>
        </div>
        </div>
        </div>
    )
}

// Izbacuje error 404, mozda nije importana slika kako treba
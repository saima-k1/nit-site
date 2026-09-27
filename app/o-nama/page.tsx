import "..//globals.css";
import Image from "next/image";

export default function ONama(){
    return(
        <div className="MainAboutDiv">
            <div className="Texts">
                <h2 className="AboutTitle1">Centar NIT - O Nama</h2>
                <p className="AboutText1">NIT je počeo kao projekat nekoliko entuzijasta koji su imali za cilj da industriji odeće pomognu 
                    implementacijom IT rešenja u njihovim poslovnim aktivnostima. Kasnije smo uvideli da i drugim industrijama treba pomoć 
                    u implemetaciji IT rešenja u poslovanju i okrenuli se, pre svega, promociji primene IT rešenja u različitim aspektima 
                    poslovanja i osnažvanju IT zajednice u Novom Pazaru i okolini. Kako bi ispunili novoformirane ciljeve, naše snage smo 
                    usmerili na tri povezana projekta:
                </p>
                <ol className="AboutList">
                    <li className="List1">IT biznis inkubator</li>
                    <li className="List2">IT obuke</li>
                    <li className="List3">Promocija primene IT rešenja i jačanje IT zajednice.</li>
                </ol>
                <p className="AboutText2">Od 2020. godine većinu naših aktivnosti organizujemo u saradnji sa Regionalnim 
                    inovaconim startap centrom Novi Pazar (riscnovipazar.rs) u želji da postignemo sinergijski efekat i 
                    damo Novom Pazaru novu snagu. 
                </p>
                <p className="AboutText3">Vremenom smo proširili naše aktivnosti na Rašku, Sjenicu, Tutin, Gračanicu, 
                    Leposavić, Lešak, Rožaje, Petnjicu, Gusinje, Bijelo Polje. 
                </p>
                <p className="AboutText4">Naša vizija:  Vizija organizacije je da razvije IT sektor koji će omogućiti 
                    mladim ljudima da ostanu u području Novog Pazara. Cilj je da im se pruže mogućnosti za pristojan 
                    rad, karijerni razvoj i život u prosperitetnoj zajednici. Naša vizija uključuje stvaranje modernog, 
                    tehnološki naprednog okruženja koje podstiče inovacije i dugoročni ekonomski rast regiona.
                </p>
                <p className="AboutText5">Naša misija: Misija organizacije je uspostaviti stimulativan ekosistem gde IT 
                    startupovi mogu da se razvijaju i ostvare svoj puni potencijal kroz znanje i inovacije. Mi težimo da 
                    pružimo podršku u vidu edukativnih programa, mentorstva, i pristupa finansiranju, kako bismo osigurali 
                    da mladi preduzetnici i stručnjaci u svojim oblastima imaju sve potrebne resurse za uspeh. Naša misija 
                    je da stvorimo održivu zajednicu koja neguje kreativnost, saradnju i tehnološki napredak.
                </p>
                <p className="AboutText6">Vrednosti koje delimo i promovišemo:</p>
                <ol className="AboutList2">
                    <li className="List4">Inovacija: Podsticanje kreativnosti i novih ideja u svakodnevnom radu.</li>
                    <li className="List5">Obrazovanje: Stalno unapređivanje znanja i veština kroz edukativne programe i obuke.</li>
                    <li className="List6">Zajedništvo: Jačanje zajednice kroz saradnju i podršku među članovima.</li>
                    <li className="List7">Održivost: Posvećenost dugoročnom razvoju i ekološkoj odgovornosti.</li>
                    <li className="List8">Integritet: Rad sa visokim moralnim standardima, poštenjem i transparentnošću.</li>
                    <li className="List9">Jednakost: Promocija ravnopravnosti i inkluzije, omogućavajući svim članovima zajednice da imaju jednake šanse za uspeh.</li>
                    <li className="List10">Tehnološki napredak: Korišćenje i promocija najnovijih tehnoloških dostignuća za unapređenje društva i ekonomije.</li>
                    <li className="List11">Podrška preduzetništvu: Pružanje pomoći i resursa za razvoj i uspeh startupova.</li>
                </ol>
            </div>
            <div className="AboutPic">
                <Image
                className="AboutPicture" 
                src="/Images/ONamaPic.jpg" 
                alt="Author" 
                width={500}
                height={500} 
                />
            </div>
        </div>
    )
}

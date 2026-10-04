import Link from "next/link";

export default function Header(){
    return(
        <header className="HomeBar">
            {/* <div className="BarPic">
                <Image
                className="BarPicture" 
                src="/Images/NitLogo.jpg" 
                alt="Author" 
                width={500}
                height={500} 
                />
            </div>  */}
            <nav>
                <Link href="/training-center" className="BarTitle1">NIT Trening Centar</Link>
            </nav>
            <nav>
                <Link href="/inkubator" className="BarTitle2">NIT Inkubator</Link>
            </nav>
            <nav>
                <Link href="/zajednica" className="BarTitle3">NIT Zajednica</Link>
            </nav>
            <nav>
                <Link href="/uspesne-price" className="BarTitle4">Uspesne Price</Link>
            </nav>
            <nav>
                <Link href="/o-nama" className="BarTitle5">O Nama</Link>
            </nav>
            <nav>
                <Link href="/kontakt" className="BarTitle6">Kontakt</Link>
            </nav>
        </header>
    )
}
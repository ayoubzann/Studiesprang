import { Footer } from 'flowbite-react';
import LogoTekst from "../../assets/LogoBilde.png"
import "./FooterElement.css"

const FooterElement = () => {
  return (
    <div className='footer'>
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src={LogoTekst}
            alt="Flowbite Logo"
            name="Studiesprang"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">Om oss</Footer.Link>
            <Footer.Link href="#">Personvern</Footer.Link>
            <Footer.Link href="#">Lisenser</Footer.Link>
            <Footer.Link href="#">Kontakt</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Studiesprang" year={2024} />
      </div>
    </Footer>
    </div>
  );
}

export default FooterElement
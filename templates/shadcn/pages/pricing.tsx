import "../assets/css/style.css";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Header from "../components/header";
import { Page } from "@/types/landing";
import Pricing from "../components/pricing";

export default function ({ page }: { page: Page }) {
  return (
    <>
      {page.header && <Header header={page.header} />}
      {page.pricing && <Pricing pricing={page.pricing}/>}
      {page.faq && <Faq section={page.faq} />}
      {page.footer && <Footer footer={page.footer} />}
    </>
  );
}

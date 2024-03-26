import Image from "next/image";
import WSMA from "@/public/sponsors/WSMA_Logo.svg";
import SPEC from "@/public/sponsors/SPEC_Logo.svg";
import buildJustly from "@/public/sponsors/BuildJustly_Logo.svg";
import { Title2 } from "@/app/ui/Titles";

const styles = {
  sectionContainer: "w-full",
  heading: "mb-4",
  sponsorsContainer: "flex flex-col md:flex-row align-start gap-8",
  sponsorLogoContainer: "flex justify-start md:justify-center items-center",
};

const SponsorsRow = () => {
  const sponsorLogos = [WSMA, SPEC, buildJustly];

  return (
    <section className={styles.sectionContainer}>
      <Title2 className={styles.heading}>Sponsors</Title2>
      <div className={styles.sponsorsContainer}>
        {sponsorLogos.map((logo, index) => (
          <div key={index} className={styles.sponsorLogoContainer}>
            <Image src={logo} alt={`Sponsor Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsRow;

import Image from "next/image";
import WSMA from "@/public/sponsors/WSMA_Logo.svg";
import SPEC from "@/public/sponsors/SPEC_Logo.svg";
import buildJustly from "@/public/sponsors/BuildJustly_Logo.svg";
import { Title3 } from "@/app/ui/Titles";

const styles = {
  sectionContainer: "w-full",
  heading: "mb-4",
  sponsorsContainer: "flex flex-col md:flex-row align-start gap-8",
  sponsorLogoContainer: "flex justify-start md:justify-center items-center",
};

const SponsorsRow = () => {
  const sponsorLogos = [
    { image: WSMA, link: "https://www.wamicrobiz.org/" },
    { image: SPEC, link: "https://specollective.org/" },
    { image: buildJustly, link: "https://buildjustly.org" },
  ];

  return (
    <section className={styles.sectionContainer}>
      <Title3 className={styles.heading}>Sponsors</Title3>
      <div className={styles.sponsorsContainer}>
        {sponsorLogos.map((sponsor, index) => (
          <div key={index} className={styles.sponsorLogoContainer}>
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <Image src={sponsor.image} alt={`Sponsor Logo ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsRow;

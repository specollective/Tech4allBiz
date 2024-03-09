import Image from "next/image";
import WSMA from "@/public/sponsors/WSMA_Logo.svg";
import SPEC from "@/public/sponsors/SPEC_Logo.svg";
import buildJustly from "@/public/sponsors/BuildJustly_Logo.svg";
const SponsorsRow = () => {
  const sponsorLogos = [WSMA, SPEC, buildJustly];

  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-4">Sponsors</h2>
      <div className="flex flex-col md:flex-row align-start gap-8">
        {sponsorLogos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-start md:justify-center items-center"
          >
            <Image src={logo} alt={`Sponsor Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsRow;

import { getSkillsArray } from "@/app/utils/getSkillsArray";
import { SkillsProp } from "@/app/constants/types";

const styles = {
  container: "w-full flex flex-col gap-2 justify-left",
  skillsSection: "flex gap-4",
  skillsHeader: "text-2xl font-bold",
  skillsText: "text-[#191308]",
};

export default function SkillsLearned({ skillsTags }: SkillsProp) {
  const skillsArray = getSkillsArray(skillsTags);

  return (
    <section className={styles.container}>
      <h2 className={styles.skillsHeader}>Skills</h2>
      <div className={styles.skillsSection}>
        {skillsArray.map((skill, index) => (
          <div key={index} className={styles.skillsText}>{`#${skill}`}</div>
        ))}
      </div>
    </section>
  );
}

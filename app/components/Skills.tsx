import { getSkillsArray } from "@/app/utils/getSkillsArray";
import { SkillsProp } from "@/app/constants/types";

const styles = {
  container: "w-full flex flex-col gap-2 justify-left",
  skillsSection: "flex gap-4",
  skillsText: "text-[#191308]",
};

export default function Skills({ skillsLearned }: SkillsProp) {
  const skillsArray = getSkillsArray(skillsLearned);

  return (
    <section className={styles.container}>
      <h2>Skills</h2>
      <div className={styles.skillsSection}>
        {skillsArray.map((skill, index) => (
          <div key={index} className={styles.skillsText}>{`#${skill}`}</div>
        ))}
      </div>
    </section>
  );
}

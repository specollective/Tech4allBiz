export const getSkillsArray = (skillsString: string): string[] => {
  const regex = /#(\S+.*?)(?=\s+#|$)/g;
  const skillsArray = [];
  let match;

  while ((match = regex.exec(skillsString)) !== null) {
    skillsArray.push(`${match[1]}`);
  }

  return skillsArray;
};

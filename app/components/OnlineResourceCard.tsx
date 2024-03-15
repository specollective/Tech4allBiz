type OnlineResourceCardProps = {
  title: string;
  description: string;
  url: string;
};

const styles = {
  cardContainer: `flex flex-col gap-y-6`,
  header: `basis-3 flex-grow-0 mb-3 font-bold text-2xl`,
  body: `flex-grow text-black`,
  linkButton: `justify-item-end w-fit mt-auto inline-block bg-[#1282A2] text-white py-2 px-4 rounded hover:bg-[#0E6881] transition-colors text-center`,
};

export default function OnlineResourceCard({
  title,
  description,
  url,
}: OnlineResourceCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>{title}</div>
      <p className={styles.body}>{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkButton}
      >
        Visit Webpage
      </a>
    </div>
  );
}

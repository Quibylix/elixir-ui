import styles from "./content-block.module.css";

export type ContentBlockProps = {
  children: React.ReactNode;
};

export default function ContentBlock({ children }: ContentBlockProps) {
  return <div className={styles.contentBlock}>{children}</div>;
}

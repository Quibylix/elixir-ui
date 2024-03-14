import ContentBlock from "@/features/ui/components/content-block/content-block.component";
import Navbar from "@/features/ui/components/navbar/navbar.component";
import SideNavigationBar from "@/features/ui/components/side-navigation-bar/side-navigation-bar.component";
import styles from "./layout.module.css";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.container}>
          <SideNavigationBar />
          <main className={styles.main}>
            <ContentBlock>{children}</ContentBlock>
          </main>
        </div>
      </div>
    </>
  );
}

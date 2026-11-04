import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import styles from "./AdminLayout.module.css";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.workspace}>
        <Topbar />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}

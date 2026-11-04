import Link from "next/link";
import styles from "./Sidebar.module.css";

const navigation = [
  { label: "Visão geral", href: "/", icon: "overview" },
  { label: "Trabalhos", href: "#", icon: "work" },
  { label: "Clientes", href: "#", icon: "clients" },
  { label: "Funções", href: "#", icon: "roles" },
  { label: "Catálogos", href: "#", icon: "catalogs" },
];

function NavigationIcon({ name }: { name: string }) {
  const commonProps = {
    "aria-hidden": true as const,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "overview":
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "work":
      return (
        <svg {...commonProps}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M3 12h18m-11 0v2h4v-2" />
        </svg>
      );
    case "clients":
      return (
        <svg {...commonProps}>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M3 20v-1.5a6 6 0 0 1 12 0V20H3Zm12-15a3.5 3.5 0 0 1 0 6.8m2 3.2a5 5 0 0 1 4 4.9V20h-3" />
        </svg>
      );
    case "roles":
      return (
        <svg {...commonProps}>
          <path d="M12 3 19 6v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6l7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <path d="M4 5.5h16M4 12h16M4 18.5h16" />
          <circle cx="8" cy="5.5" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="10" cy="18.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Link className={styles.brand} href="/" aria-label="Lab Catarina Domingos - início">
        <span className={styles.brandMonogram} aria-hidden="true">
          LCD
        </span>
        <span className={styles.brandName}>Lab Catarina Domingos</span>
      </Link>

      <div className={styles.menuLabel}>MENU</div>
      <nav className={styles.navigation} aria-label="Navegação principal">
        {navigation.map((item, index) => (
          <Link
            className={`${styles.navigationLink} ${index === 0 ? styles.active : ""}`}
            href={item.href}
            aria-current={index === 0 ? "page" : undefined}
            key={item.label}
          >
            <NavigationIcon name={item.icon} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className={styles.footer}>
        <div className={styles.helpCard}>
          <span className={styles.helpIcon} aria-hidden="true">
            ?
          </span>
          <span className={styles.helpCopy}>
            <strong>Precisa de ajuda?</strong>
            <span>Consulte o guia da plataforma</span>
          </span>
          <span className={styles.helpArrow} aria-hidden="true">
            ↗
          </span>
        </div>

        <div className={styles.profile}>
          <span className={styles.avatar} aria-hidden="true">
            MS
          </span>
          <span className={styles.profileCopy}>
            <strong>Marta Silva</strong>
            <span>Administradora</span>
          </span>
          <span className={styles.profileArrow} aria-hidden="true">
            ↗
          </span>
        </div>
      </div>
    </aside>
  );
}

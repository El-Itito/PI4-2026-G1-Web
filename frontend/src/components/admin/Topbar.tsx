import styles from "./Topbar.module.css";

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.status}>
        <span className={styles.statusDot} aria-hidden="true" />
        <span>Operação atualizada</span>
      </div>

      <div className={styles.controls}>
        <label className={styles.profileLabel} htmlFor="view-profile">
          Ver como
        </label>
        <select className={styles.profileSelect} defaultValue="Administrador" id="view-profile">
          <option>Administrador</option>
        </select>

        <div className={styles.notifications} aria-label="3 notificações não lidas">
          <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
            viewBox="0 0 24 24"
          >
            <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12h4" />
          </svg>
          <span>3</span>
        </div>

        <span className={styles.avatar} role="img" aria-label="Marta Silva">
          MS
        </span>
      </div>
    </header>
  );
}

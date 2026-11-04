import AdminLayout from "@/components/admin/AdminLayout";

export default function Home() {
  return (
    <AdminLayout>
      <section className="dashboardWelcome" aria-labelledby="welcome-title">
        <span className="dashboardEyebrow">VISÃO GERAL</span>
        <h1 id="welcome-title">Bom dia, Marta</h1>
        <p>Este é o espaço de gestão do Lab Catarina Domingos.</p>
      </section>

      <section className="dashboardPlaceholder" aria-labelledby="workspace-title">
        <span className="dashboardPlaceholderMark" aria-hidden="true">
          LCD
        </span>
        <div>
          <span className="dashboardPlaceholderEyebrow">BACKOFFICE</span>
          <h2 id="workspace-title">O seu espaço de trabalho</h2>
          <p>As páginas de gestão do laboratório serão adicionadas aqui.</p>
        </div>
      </section>
    </AdminLayout>
  );
}

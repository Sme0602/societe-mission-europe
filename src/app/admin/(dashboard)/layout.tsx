import Sidebar from "@/components/admin/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-beige-50 p-6 md:p-10 overflow-auto">
        {children}
      </main>
    </div>
  );
}

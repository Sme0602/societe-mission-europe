import StructuredData from "@/components/StructuredData";
import PublicShell from "@/components/PublicShell";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData />
      <PublicShell>{children}</PublicShell>
    </>
  );
}

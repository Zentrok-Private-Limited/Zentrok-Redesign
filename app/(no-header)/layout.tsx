import PaymentFooter from "@/components/PaymentFooter";
export default function NoHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}
  <PaymentFooter />
  </>;
}
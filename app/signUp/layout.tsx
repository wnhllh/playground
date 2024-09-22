export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 flex h-screen z-50">
      <div className="w-1/2 bg-[rgb(8,51,68)]"></div>
      <div className="w-1/2 bg-black"></div>
      <div className="absolute inset-0 z-60">{children}</div>
    </div>
  );
}

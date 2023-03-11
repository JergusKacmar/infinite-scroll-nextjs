import "./globals.css";

export const metadata = {
  title: "Infinite scroll",
  description: "Infinite scroll showcase in NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

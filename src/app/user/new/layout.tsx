import "@fontsource/roboto/300.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div>
        {children}
      </div>
  );
}

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full font-inter justify-between">
        {children}
      </main>
    )
  }
  
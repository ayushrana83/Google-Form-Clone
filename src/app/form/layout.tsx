
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
        >
          <div className="mt-5 mb-3 text-center text-lg font-medium flex items-center justify-center gap-4">
            <div>Questions</div>
            <div>Responses</div>
          </div>
          {children}
          <div className="m-9 text-center text-2xl ">
            <h1>Google forms</h1>
          </div>
        </body>
      </html>
    );
  }
  
import { Navbar } from "@/ui/navbar";
export default function CourseLayOut({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="nord">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";
import { usePathname } from "next/navigation";

export default function Document() {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <Html lang="en" className="bg-[rgb(36,36,36)]">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

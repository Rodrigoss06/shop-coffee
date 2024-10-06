import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href='https://fonts.googleapis.com/css?family=Clicker Script' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Playfair Display' rel='stylesheet'/>

      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

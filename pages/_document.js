import { Html, Head, Main, NextScript } from 'next/document'

// Runs before first paint so a stored/preferred dark theme never flashes light.
const themeInit = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
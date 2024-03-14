import I18nLink from "@/features/i18n/components/i18n-link/i18n-link.component";
import { LanguageContext } from "@/features/i18n/contexts/language.context";
import pageWithLangParam from "@/features/i18n/hocs/page-with-lang-param.hoc";
import { Link } from "@elixir-ui/react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return (await LanguageContext.dict).docs.usage.metadata;
}

export default pageWithLangParam(async function UsagePage() {
  const dict = (await LanguageContext.dict).docs.usage;

  return (
    <>
      <h1>{dict.heading}</h1>
      <p>{dict.description.nowThatYouHaveInstalledElixirUI}</p>
      <p>
        {dict.description.ifYouAreUsing}
        <Link
          as={I18nLink}
          color="primary"
          external
          href="https://github.com/quibylix/elixir-ui/issues/new?assignees=&labels=enhancement"
        >
          {dict.description.githubRepository}
        </Link>
        {dict.description.andWeWillHelpYou}
      </p>
      <h2>{dict.nextJS.heading}</h2>
      <p>{dict.nextJS.description}</p>
      <h3>{dict.nextJS.sections.appRouter.heading}</h3>
      <p>{dict.nextJS.sections.appRouter.steps.addLayers}</p>
      <pre>
        <code>
          {`@layer globals, variables, elixir;

@layer globals {
  /* Your global styles are here, for example: */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
}`}
        </code>
      </pre>
      <p>{dict.nextJS.sections.appRouter.steps.whenUsingLayers}</p>
      <p>{dict.nextJS.sections.appRouter.steps.addTheCSSImport}</p>
      <pre>
        <code>
          {`import "./globals.css";

import { Roboto } from "next/font/google";
import { Button } from "@elixir-ui/react";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Button color="primary">Hello world!</Button>
        {children}
      </body>
    </html>
  );
}`}
        </code>
      </pre>

      <h3>{dict.nextJS.sections.pagesRouter.heading}</h3>
      <p>{dict.nextJS.sections.pagesRouter.dontAvailable}</p>

      <h2>{dict.vite.heading}</h2>
      <p>{dict.vite.description}</p>
      <p>{dict.vite.steps.addLayers}</p>
      <pre>
        <code>
          {`@layer globals, variables, elixir;

@layer globals {
  /* Your global styles are here, for example: */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
}`}
        </code>
      </pre>
      <p>{dict.vite.steps.whenUsingLayers}</p>

      <p>{dict.vite.steps.addTheCSSImport}</p>
      <pre>
        <code>
          {`import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Button } from "@elixir-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Button color="primary">Hello world!</Button>
  </React.StrictMode>
);`}
        </code>
      </pre>
      <h2>{dict.tailwind.heading}</h2>
      <p>{dict.tailwind.description.tailwindIs}</p>
      <p>{dict.tailwind.description.allElixirUIComponents}</p>
      <p>{dict.tailwind.description.ifYouAreUsingTailwindCSS}</p>
      <p>{dict.tailwind.steps.wrapDirectives}</p>
      <pre>
        <code>
          {`@layer tailwind-base {
  @tailwind base;
}

@layer tailwind-utilities {
  @tailwind components;
  @tailwind utilities;
}`}
        </code>
      </pre>
      <p>{dict.vite.steps.addLayers}</p>
      <pre>
        <code>
          {`@layer globals, tailwind-base, variables, elixir, tailwind-utilities;

@layer tailwind-base {
  @tailwind base;
}

@layer tailwind-utilities {
  @tailwind components;
  @tailwind utilities;
}

@layer globals {
  /* Your global styles are here, for example: */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
}`}
        </code>
      </pre>
      <p>{dict.vite.steps.whenUsingLayers}</p>
      <p>{dict.vite.steps.addTheCSSImport}</p>
      <pre>
        <code>
          {`import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Button } from "@elixir-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Button className="bg-blue-500 text-white" color="primary">Hello world!</Button>
  </React.StrictMode>
);`}
        </code>
      </pre>
    </>
  );
});

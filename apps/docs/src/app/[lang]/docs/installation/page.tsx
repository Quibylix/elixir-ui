import I18nLink from "@/features/i18n/components/i18n-link/i18n-link.component";
import { LanguageContext } from "@/features/i18n/contexts/language.context";
import pageWithLangParam from "@/features/i18n/hocs/page-with-lang-param.hoc";
import { Link } from "@elixir-ui/react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return (await LanguageContext.dict).docs.installation.metadata;
}

export default pageWithLangParam(async function InstallationPage() {
  const dict = (await LanguageContext.dict).docs.installation;

  return (
    <>
      <h1>{dict.heading}</h1>
      <p>
        {dict.description.elixirUIIsDistributedAsAnNpmPackage}{" "}
        <Link as={I18nLink} color="warning" external href="https://pnpm.io/">
          pnpm
        </Link>{" "}
        {dict.description.forAFasterAndMoreEfficientInstallation}
      </p>
      <h2>{dict.requirements.heading}</h2>
      <ul>
        <li>
          <Link
            as={I18nLink}
            color="success"
            external
            href="https://nodejs.org/en/"
          >
            Node.js
          </Link>
          . {dict.requirements.list.node}
        </li>
        <li>
          <Link
            as={I18nLink}
            color="secondary"
            external
            href="https://reactjs.org/"
          >
            React
          </Link>
          . {dict.requirements.list.react}
        </li>
        <li>
          {dict.requirements.list.cssModules}
          <Link
            as={I18nLink}
            color="info"
            external
            href="https://github.com/css-modules/css-modules"
          >
            CSS Modules
          </Link>
          .
        </li>
        <li>
          {dict.requirements.list.packageManager}
          <Link
            as={I18nLink}
            color="danger"
            external
            href="https://www.npmjs.com/"
          >
            npm
          </Link>
          ,{" "}
          <Link as={I18nLink} color="info" external href="https://yarnpkg.com/">
            yarn
          </Link>
          {dict.requirements.list.or}{" "}
          <Link as={I18nLink} color="warning" external href="https://pnpm.io/">
            pnpm
          </Link>
          .
        </li>
      </ul>
      <h2>{dict.installationSteps.heading}</h2>
      <p>{dict.installationSteps.steps.installPackage}</p>
      <pre>
        <code>
          {`pnpm install @elixir-ui/react
# or
npm install @elixir-ui/react
# or
yarn add @elixir-ui/react`}
        </code>
      </pre>
      <p>
        {dict.installationSteps.steps.addLayers}
        <Link as={I18nLink} href="/docs/usage" color="primary">
          {dict.installationSteps.steps.usage}
        </Link>{" "}
        {dict.installationSteps.steps.section}
      </p>
      <p>
        {dict.installationSteps.steps.usesCSSLayers}
        <Link
          as={I18nLink}
          color="primary"
          external
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/@layer"
        >
          {dict.installationSteps.steps.mdnWebDocs}
        </Link>
        .
      </p>
      <p>{dict.installationSteps.steps.mustAddLayer}</p>
      <pre>
        <code>{`@layer variables, elixir;`}</code>
      </pre>
      <p>{dict.installationSteps.steps.inAddition}</p>
      <pre>
        <code>
          {`@layer globals, variables, elixir;

@layer globals {
  /* Your global styles goes here, for example: */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
}`}
        </code>
      </pre>
      <p>{dict.installationSteps.steps.finally}</p>
      <pre>
        <code>
          {`import { Button } from "@elixir-ui/react";

export default function App() {
  return (
    <Button color="primary">Hello world!</Button>
  );
}`}
        </code>
      </pre>
      <h2>{dict.nextSteps.heading}</h2>
      <p>
        {dict.nextSteps.description.nowThatYouHaveInstalled}
        <Link as={I18nLink} href="/docs/components/button" color="primary">
          {dict.nextSteps.description.components}
        </Link>{" "}
        {dict.nextSteps.description.section}
      </p>
    </>
  );
});

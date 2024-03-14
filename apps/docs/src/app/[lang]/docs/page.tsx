import I18nLink from "@/features/i18n/components/i18n-link/i18n-link.component";
import { LanguageContext } from "@/features/i18n/contexts/language.context";
import pageWithLangParam from "@/features/i18n/hocs/page-with-lang-param.hoc";
import { Link } from "@elixir-ui/react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return (await LanguageContext.dict).docs.introduction.metadata;
}

export default pageWithLangParam(async function DocsPage() {
  const dict = (await LanguageContext.dict).docs.introduction;

  return (
    <>
      <h1>{dict.heading}</h1>
      <p>{dict.description}</p>
      <section>
        <h2>{dict.whatIsElixirUI.title}</h2>
        <p>{dict.whatIsElixirUI.description}</p>
      </section>
      <section>
        <h2>{dict.features.title}</h2>
        <ul>
          {dict.features.list.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{dict.gettingStarted.title}</h2>
        <p>
          {dict.gettingStarted.description.toGetStarted}{" "}
          <Link color="primary" as={I18nLink} href="/docs/installation">
            {dict.gettingStarted.description.installation}
          </Link>{" "}
          {dict.gettingStarted.description.sectionAndFollowTheInstructions}{" "}
          <Link color="primary" as={I18nLink} href="/docs/usage">
            {dict.gettingStarted.description.usage}
          </Link>{" "}
          {dict.gettingStarted.description.sectionForMoreInformation}
        </p>
      </section>
    </>
  );
});

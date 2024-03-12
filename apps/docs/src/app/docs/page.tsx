import { getTranslation } from "@/features/i18n/services/get-translation.service";
import ContentBlock from "@/features/ui/components/content-block/content-block.component";
import { Link } from "@elixir-ui/react";
import { Metadata } from "next";
import NextLink from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getTranslation();

  return dict.docs.introduction.metadata;
}

export default async function DocsPage() {
  const dict = (await getTranslation()).docs.introduction;

  return (
    <ContentBlock>
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
          <Link color="primary" as={NextLink} href="/docs/installation">
            {dict.gettingStarted.description.installation}
          </Link>{" "}
          {dict.gettingStarted.description.sectionAndFollowTheInstructions}{" "}
          <Link color="primary" as={NextLink} href="/docs/usage">
            {dict.gettingStarted.description.usage}
          </Link>{" "}
          {dict.gettingStarted.description.sectionForMoreInformation}
        </p>
      </section>
    </ContentBlock>
  );
}

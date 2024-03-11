export type GetSideNavigationBarSectionsDict = {
  gettingStarted: {
    title: string;
    links: {
      introduction: string;
      installation: string;
      usage: string;
    };
  };
  guides: {
    title: string;
    links: {
      customization: string;
      theming: string;
      serverSideRendering: string;
    };
  };
  components: {
    title: string;
    links: {
      button: string;
      input: string;
      link: string;
    };
  };
};

export function getSideNavigationBarSections(
  dict: GetSideNavigationBarSectionsDict,
) {
  return [
    {
      title: dict.gettingStarted.title,
      links: [
        {
          path: "/docs/introduction",
          title: dict.gettingStarted.links.introduction,
        },
        {
          path: "/docs/installation",
          title: dict.gettingStarted.links.installation,
        },
        { path: "/docs/usage", title: dict.gettingStarted.links.usage },
      ],
    },
    {
      title: dict.guides.title,
      links: [
        { path: "/docs/customization", title: dict.guides.links.customization },
        { path: "/docs/theming", title: dict.guides.links.theming },
        {
          path: "/docs/server-side-rendering",
          title: dict.guides.links.serverSideRendering,
        },
      ],
    },
    {
      title: dict.components.title,
      links: [
        { path: "/docs/button", title: dict.components.links.button },
        { path: "/docs/input", title: dict.components.links.input },
        { path: "/docs/link", title: dict.components.links.link },
      ],
    },
  ];
}

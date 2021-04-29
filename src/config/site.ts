import { SiteConfig } from "@/core/types"

export const site: SiteConfig = {
  name: "Radix",
  description: "Responsive base theme for Drupal",
  copyright: `© ${new Date().getFullYear()} Radix theme.`,
  links: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Documentation",
      url: "/",
      activePathNames: ["/[[...slug]]"],
    },
    {
      title: "Drupal",
      url: "https://drupal.org/project/radix",
      external: true,
    },
  ],
  social: {
    github: "radixtheme/radix",
    twitter: "arshadcn",
  },
}

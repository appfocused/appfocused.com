// package.json
declare module '*/package.json' {
  export const version: string;
  export const author: string;
}

declare const graphql: (query: TemplateStringsArray) => void;

declare module 'disqus-react' {
  export class DiscussionEmbed extends React.Component<
    {
      shortname: string;
    },
    {}
  > {}
}

declare module '*.css';
declare module '*.jpg';
declare module '*.svg';

declare module 'typography-theme-wordpress-2016';
declare module 'typography';
declare module '@mdx-js/tag';
declare module 'gatsby-plugin-transition-link/AniLink';

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

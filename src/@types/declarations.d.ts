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

declare module '*.jpg';

declare module 'typography-theme-wordpress-2016';
declare module 'typography';

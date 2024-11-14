# Trans2Every Landing Page Template

This is a landing page created by [2every](https://2every.com). It is built with Next.js and Shadcn UI.

![preview](./templates/shadcn/assets/imgs/preview.png)

## Local Development

1. Clone the repository

```shell
git clone https://github.com/2every/2every-ai-landing-page-template landing-page

cd landing-page
```

2. Install dependencies

```shell
pnpm install
```

3. Preview the landing page

```shell
pnpm dev
```

4. View the landing page at

`http://localhost:3000`

## Customization

You can customize the landing page content by editing the `data/2every.ts` file.

You can customize the landing page style by editing the `templates/shadcn/` folder.

You can create a new page with a new `page.tsx` in the `app` folder:

```ts
import Landing from "@/templates/shadcn/pages/landing";
import { page } from "@/data/2every";

export default async function () {
  return <Landing page={page} />;
}
```

## Create Template

You can create a new template by creating a new folder in the `templates` folder.

organize the template files with the following format:

```
new-template
├── assets
│   ├── css
│   │   └── style.css
│   └── imgs
│       └── logo.png
├── components
│   ├── cta
│   │   └── index.tsx
│   ├── faq
│   │   └── index.tsx
│   ├── feature
│   │   └── index.tsx
│   ├── footer
│   │   └── index.tsx
│   ├── header
│   │   └── index.tsx
│   ├── hero
│   │   └── index.tsx
│   ├── pricing
│   │   └── index.tsx
│   ├── section
│   │   └── index.tsx
│   ├── testimonial
│   │   └── index.tsx
│   └── usercase
│       └── index.tsx
└── pages
    └── landing.tsx
```

<!-- ## Submit Template

After you created your template, you can submit it to 2every Templates Center with an issue:

[https://github.com/2every/2every-ai-landing-page-template/issues](https://github.com/2every/2every-ai-landing-page-template/issues) -->

## Credits To

- [2every](https://2every.com)
- [Next.js](https://nextjs.org)
- [Shadcn UI](https://ui.shadcn.com)

<!-- if you use this Landing Page Template, please give a credit to [2every](https://2every.com)

> Create landing page in seconds, try it out 👉 [2every AI Landing Page Generator](https://2every.com/landing-page-generator) -->

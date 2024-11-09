This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Other information

1. Библиотека CSS-in-JS не была использована, так как был использован подход css modules, который быстрее в написании и рендеринге. Также выбор пал на css modules, так как в данном случае код представлен в более понятном и компактном виде.

2. Адаптивность достигнута посредством медиа-запросов и использования единицы измерения rem.

3. Была использована библиотека компонентов Radix.

4. Был использован фреймворк Express для создания веб-сервера.

## Инструкция по запуску проекта

1. Открыть проект сервера, установить зависимости с помощью npm i, и запустиить его помощью npm start.
2. Открыть проект приложения, выполнить установку зависимостей npm i --legacy-peer-deps, запустить его с помощью npm run dev.

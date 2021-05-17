This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To start on development server :

1. Create .env file with your PORT number info

```bash
PORT=<port_number_here>
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```


## Breakpoint Styling

Refer to https://tailwindcss.com/docs/responsive-design
Notes : You only need to specify when a utility should start taking effect, not when it should stop.

```css
mobile
xs (start)	<640px	@media (min-width: 0px) { ... }
sm	640px	@media (min-width: 640px) { ... }
tablet
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
desktop
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }
```



Open [http://localhost:<port_number>](http://localhost:<port_number>) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
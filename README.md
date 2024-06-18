This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

##file structure

all the pages are inside src/app and the all folder are given the name of the pages since , all the files inside the folder are named as page.tsx for navigation this done because we are using app router 
so if you want to add a page make a folder with the name and give the path as folder name "/servicespage" it will navigate auto matically 

for backend the files are inside api folder insode app and to add the handler/helper/validation code make a folder with the name of the page same as above and file name as route.ts

after running if ur getting hidration error diable all browser extension since they can cause it.

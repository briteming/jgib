# Github Issues Blog

## Description

This is the blog template that uses Github issues for blog posts and comments.

💻 [Live Demo](https://jim-github-issues-blog.vercel.app/)

## Features

Visitors can:

- View blog posts
- View blog comments
- Add comments (Github login required)

Admins can (need to login with Github account):

- Create blog posts
- Edit blog posts
- Delete blog posts (Close the issue)
- Add comments

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/Jim876633/github-issues-blog.git
```

2. Install dependencies

```bash
npm install
```

3. Configuration

Create a `.env.local` file in the root directory and add the following environment variables:

```bash
ACCESS_TOKEN="YOUR_GITHUB_ACCESS_TOKEN"
CLIENT_ID="YOUR_GITHUB_APPLICATION_CLIENT_ID"
CLIENT_SECRET="YOUR_GITHUB_APPLICATION_CLIENT_SECRET"
```

Change the `userName` and `repoName` in `src/constants/common.ts` for your own Github issues blog.

```typescript
// src/constants/common.ts
const userName = "YOUR_GITHUB_USERNAME";
const repoName = "YOUR_GITHUB_REPOSITORY_NAME";
```

4. Run the development server

```bash
npm run dev
```

The project will be available at `http://localhost:3000`.

## Technologies Used

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- zustand
- react-hook-form + zod
- marked

## Todo

- [ ] Responsive design
- [ ] Dark mode
- [ ] Search
- [ ] Post preview

## Structure

```
📂 src
├─ 📂 api
├─ 📂 app
│ ├─ 📂 about
│ ├─ 📄 actions.ts
│ ├─ 📂 blogs
│ │ ├─ 📂 [blogId]
│ │ ├─ 📄 blog.module.scss
│ │ ├─ 📂 components
│ │ ├─ 📄 layout.tsx
│ │ ├─ 📄 loading.tsx
│ │ └─ 📄 page.tsx
│ ├─ 📄 error.tsx
│ ├─ 📄 favicon.ico
│ ├─ 📄 globals.css
│ ├─ 📄 layout.tsx
│ ├─ 📄 not-found.tsx
│ └─ 📄 page.tsx
├─ 📂 assets
│ └─ 📂 img
├─ 📂 components
│ ├─ 📄 Modal.tsx
│ ├─ 📄 Navbar.tsx
│ ├─ 📄 Spinner.tsx
│ ├─ 📂 button
│ ├─ 📂 skeleton
│ ├─ 📄 BlogListSkeleton.tsx
│ └─ 📄 BlogSkeleton.tsx
├─ 📂 constants
│ ├─ 📄 commons.ts
│ └─ 📄 urls.ts
├─ 📂 store
│ └─ 📄 ModalStore.ts
├─ 📂 types
│ ├─ 📄 blogType.ts
│ └─ 📄 userType.ts
└─ 📂 utils

```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](https://github.com/Jim876633/github-issues-blog/blob/main/LICENSE).

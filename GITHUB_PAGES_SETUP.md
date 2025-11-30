# GitHub Pages Deployment Guide

This guide will help you deploy your personal website to GitHub Pages with a custom `.io` domain.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and pnpm installed

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the **+** icon in the top-right corner and select **New repository**
3. Name your repository `username.github.io` (replace `username` with your actual GitHub username)
4. Make the repository **Public**
5. Click **Create repository**

## Step 2: Prepare Your Project

1. Navigate to your project directory:
   ```bash
   cd personal-website
   ```

2. Build the project for production:
   ```bash
   pnpm build
   ```

   This will create a `dist` folder with the compiled website.

## Step 3: Initialize Git and Push to GitHub

1. Initialize a git repository (if not already done):
   ```bash
   git init
   ```

2. Add all files:
   ```bash
   git add .
   ```

3. Create your first commit:
   ```bash
   git commit -m "Initial commit: Personal website"
   ```

4. Add the remote repository (replace `username` with your GitHub username):
   ```bash
   git remote add origin https://github.com/username/username.github.io.git
   ```

5. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**, select:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `dist` (or `/dist`)
5. Click **Save**

GitHub will automatically deploy your website. Wait 1-2 minutes for the deployment to complete.

## Step 5: Access Your Website

Your website will be available at: `https://username.github.io`

You can verify the deployment in the **Deployments** section of your repository.

## Customizing Your Website

Before deploying, customize the following files with your information:

### 1. Update Your Name and Bio
**File:** `client/src/pages/Home.tsx`

Replace:
- `"Your Name"` with your actual name
- `"Physicist | Data Scientist | Open Source Enthusiast"` with your title
- The bio paragraph with your introduction

### 2. Update Projects
In the same file, update the `projects` array with your actual scientific projects:
```tsx
const projects: Project[] = [
  {
    title: "Your Project Title",
    description: "Project description",
    tags: ["Tag1", "Tag2"],
    link: "https://github.com/yourprofile/project",
    year: "2024",
  },
  // Add more projects...
];
```

### 3. Update Education
Update the `education` array with your degrees and certifications:
```tsx
const education: EducationItem[] = [
  {
    degree: "Your Degree",
    institution: "University Name",
    year: "2020–2024",
    details: "Your details here",
  },
  // Add more education...
];
```

### 4. Update Blog Posts
Update the `blogPosts` array with your actual blog posts:
```tsx
const blogPosts: BlogPost[] = [
  {
    title: "Your Blog Title",
    excerpt: "Brief excerpt",
    date: "November 28, 2024",
    slug: "blog-slug",
  },
  // Add more posts...
];
```

### 5. Update Life Goals
Update the `goals` array with your personal goals:
```tsx
const goals: Goal[] = [
  {
    title: "Goal Title",
    description: "Goal description",
    status: "in-progress", // or "planned" or "completed"
  },
  // Add more goals...
];
```

### 6. Update Social Media Links
Update the `socialLinks` array with your actual social media profiles:
```tsx
const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:your.email@example.com",
    label: "your.email@example.com",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/yourprofile",
    label: "github.com/yourprofile",
  },
  // Add more links...
];
```

### 7. Update Footer
In the same file, update the footer copyright:
```tsx
<p className="text-sm text-foreground/60 text-center">
  © 2024 Your Name. All rights reserved.
</p>
```

### 8. Update Page Title
**File:** `client/index.html`

Change:
```html
<title>Personal Portfolio</title>
```

To your preferred title.

## Continuous Deployment

After you've customized your website:

1. Build the project:
   ```bash
   pnpm build
   ```

2. Commit your changes:
   ```bash
   git add .
   git commit -m "Update website content"
   ```

3. Push to GitHub:
   ```bash
   git push
   ```

GitHub will automatically redeploy your website with the new changes within 1-2 minutes.

## Custom Domain (Optional)

If you want to use a custom domain instead of `username.github.io`:

1. Go to your repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g., `yourname.com`)
3. Click **Save**
4. Update your domain's DNS settings to point to GitHub Pages:
   - Add an A record pointing to GitHub's IP addresses
   - Or add a CNAME record pointing to `username.github.io`

See [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for detailed instructions.

## Troubleshooting

**Website not showing up?**
- Wait 2-3 minutes for GitHub to deploy
- Check the **Deployments** tab in your repository
- Ensure the `dist` folder is being deployed

**Changes not reflecting?**
- Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Wait for the deployment to complete (check Deployments tab)

**Build errors?**
- Run `pnpm install` to ensure all dependencies are installed
- Run `pnpm build` locally to check for errors
- Fix any errors and push again

## Project Structure

```
personal-website/
├── client/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── pages/       # Page components
│   │   ├── components/  # Reusable components
│   │   ├── App.tsx      # Main app component
│   │   ├── index.css    # Global styles
│   │   └── main.tsx     # Entry point
│   └── index.html       # HTML template
├── dist/                # Built website (generated after pnpm build)
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

## Design Customization

The website uses a **Minimalist Academic** design with:
- **Colors**: Teal accent (#0d9488) on off-white background
- **Typography**: IBM Plex Serif (headings) and IBM Plex Sans (body)
- **Style**: Clean, professional, with generous whitespace

To customize colors, edit `client/src/index.css` and update the CSS variables in the `:root` section.

## Support

For more information about GitHub Pages, visit the [official documentation](https://docs.github.com/en/pages).

For questions about the website code, refer to the comments in `client/src/pages/Home.tsx`.

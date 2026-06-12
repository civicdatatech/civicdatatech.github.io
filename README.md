# Civicdata.Tech GitHub Pages Site

This is the source for the Civicdata.Tech website, designed for deployment on GitHub Pages.

## How to Compile

No compilation is required for this site. All files are static HTML and CSS. You can view the site locally by simply opening `index.html` in your web browser.

## How to Deploy

1. **Push this repository to GitHub.**
2. Compile the static files with `npm run build`. Commit and push the changed files. 
3. In your repository settings on GitHub, go to the **Pages** section.
4. Set the source branch to `main` (or your default branch) and the root directory (`/`).

### Blog Posts
Create a branch named after the blog post title. Create a markdown file and use the format of [this post](client/src/blog/posts/01-welcome.md) as a guide. Commit the post, raise a PR and tag @VirginiaDooley for review. 

### Local Preview (Optional)
If you want to preview the site locally with Jekyll (optional, not required for static HTML):

1. Install npm if you don't have ity.
2. Run `npm install`.
3. Run `npm run dev` and visit `http://localhost:5173/`.

## Site Structure
- `index.html`: Main homepage with all content.
- `style.css`: Stylesheet for the site.
- `index.md`: Markdown version of the homepage content (optional, for Jekyll or reference).

## Contact
For questions or to get involved, email: info@civicdata.tech

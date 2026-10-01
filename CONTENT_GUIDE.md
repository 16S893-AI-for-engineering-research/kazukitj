# Content expansion guide

The site now contains concise Assignment 1 content. Future additions should remain inside the existing `CONTENT START` and `CONTENT END` comments so that content stays separate from layout and styling.

## Editing rules

1. Open the HTML file listed below.
2. Find the named `CONTENT START` and `CONTENT END` comments.
3. Edit only the HTML between those comments.
4. Keep each surrounding section and its `id` so in-page navigation continues to work.
5. Use semantic HTML: `<h2>` and `<h3>` for headings, `<p>` for paragraphs, `<ul>` or `<ol>` for lists, `<a>` for links, and `<figure>` with `<img>` and `<figcaption>` for images.
6. Keep visual rules in `assets/css/styles.css` and behavior in `assets/js/site.js`.

The content sections expand vertically, so paragraphs, lists, subsections, links, and images can be added without changing the overall page structure.

## `index.html`

### Landing page summary

Expand the block labeled `Landing page summary` with a short overview of the site. Keep this briefer than the full introduction.

## `about.html`

### Personal introduction

Expand `Personal introduction` with additional introductory paragraphs about Kazuki.

### Background and experience

Expand `Background and experience` with more detail about research, education, or engineering experience. Lists and relevant links can be added inside the existing section.

### Interests and perspective

Expand `Interests and perspective` with more detail about research interests and reasons for taking 16.S893. The topic tags can be edited or extended.

If a personal or research image is added later, place it inside one of these marked sections using:

```html
<figure>
  <img class="content-image" src="assets/images/image-name.jpg" alt="A concise description of the image">
  <figcaption>Image context and credit.</figcaption>
</figure>
```

Create `assets/images/` within this repository when needed. Use relative paths, compress images for the web, and provide meaningful alt text.

## `project.html`

### Project overview

The project page is organized as a four-part scrolling overview that can also support a short presentation. Keep the section order and `data-talk-section` values synchronized with the sticky project map so the active-step indicator continues to work.

Revise the content inside `Project overview` as the research develops. Favor one clear idea per section, short audience-facing text, and diagrams or structured comparisons over long prose. Preserve scientifically important qualifications from the current proposal, particularly the non-uniqueness of the source-and-vorticity representation and the distinction between representation, extraction, and evaluation.

## `dev-log.html`

### Dev-log overview

Keep the introductory note brief and focused on the page as a course record.

### Dev-log entries

Keep entries in chronological order from oldest to newest. Each entry should contain a date, a short title, and one first-person paragraph recording the work done in class and any useful reflection or learning. An entry may also include one relevant image or link. Give every article the next unique ID (`entry-006`, `entry-007`, and so on), use a valid `<time datetime="YYYY-MM-DD">`, and add its link to the bottom of the numbered in-page navigation.

## Review checklist

- Confirm that all statements remain accurate.
- Check every internal and external link.
- Give every image useful alt text and credit externally sourced material.
- Keep heading levels sequential.
- Review at narrow mobile and wide desktop sizes.
- Keep internal links and asset paths relative for GitHub Pages under `/kazukitj/`.

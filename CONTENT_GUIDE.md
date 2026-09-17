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

### Project title and summary

Update `Project title and summary` as the working title and scope become more concrete.

### Project question and context

Expand `Project question and context` with the motivation, relevant technical background, and connection to 16.S893.

### Proposed concept

Expand `Proposed concept` with further analysis methods, technical detail, constraints, or links to related work.

### Course project direction

Expand `Course project direction` after the project format, process, and intended outcomes are decided. Milestones, references, and visuals can be added within this marked section or as new marked sections.

## `dev-log.html`

### Dev-log overview

Update `Dev-log overview` when the logging method or summary counts change. Keep the interaction count synchronized with the number of entries.

### Dev-log entries

Add each new interaction to the top of `Dev-log entries`, using the existing articles as a template. Give every article a unique descending ID (`entry-003`, `entry-004`, and so on), a valid `<time datetime="YYYY-MM-DD">`, and four clear disclosures:

- the agent or tool used;
- what you asked it to do;
- how it contributed;
- your role, verification, and reflection.

Also update the in-page navigation and summary count whenever an entry is added. Keep prompt descriptions concise and remove private or sensitive information before publishing. When reporting Pi session activity, count user-role message records as messages typed and assistant `toolCall` content items as tool calls; include the relevant session dates and timezone.

### Dev-log principles

Edit `Dev-log principles` only if the disclosure and review protocol changes.

## Review checklist

- Confirm that all statements remain accurate.
- Check every internal and external link.
- Give every image useful alt text and credit externally sourced material.
- Keep heading levels sequential.
- Review at narrow mobile and wide desktop sizes.
- Keep internal links and asset paths relative for GitHub Pages under `/kazukitj/`.

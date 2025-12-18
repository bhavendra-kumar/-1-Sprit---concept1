## Rendering Modes Used

### Static Rendering (SSG) – /about
This page is generated at build time and served as static HTML.
It is extremely fast and reduces server load.
Used for content that rarely changes.

### Dynamic Rendering (SSR) – /dashboard
This page is rendered on every request using server-side rendering.
Data is always fresh and suitable for user-specific dashboards.
However, it increases server cost and response time.


### Hybrid Rendering (ISR) – /news
This page uses Incremental Static Regeneration with revalidation every 60 seconds.
It combines fast load times with reasonably fresh data.
Ideal for news and content feeds.

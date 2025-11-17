# SchoolHouse Connection – UHY Determination Quiz

Embeddable, framework-agnostic quiz widget that modernizes SchoolHouse Connection’s “Unaccompanied Homeless Youth Determination” flowchart. The widget guides students through the decision tree and surfaces the correct next steps with quick links to SHC template letters.

## Highlights

- Vanilla JS bundle (`dist/uhy-quiz.js`) injects UI + styles; no external runtime dependencies.
- Step-by-step, accessible experience (WCAG AA color contrast, keyboard support, ARIA live regions).
- Configurable resource links and optional analytics callbacks (`onStep`, `onOutcome`).
- Built-in graceful fallback markup for non-JS environments.
- Supports restoring quiz state from a `#path=` hash and includes a print-friendly outcome view.

## Quick Start

1. **Install dependencies & build:**

   ```bash
   npm install
   npm run build
   ```

   The build creates `dist/uhy-quiz.js`, an IIFE exposing `window.UHYQuiz`.

2. **Embed on any CMS page:**

   ```html
   <div data-uhy-quiz>
     <div class="uhyq-fallback" role="note">
       <p>
         <strong>This tool needs JavaScript.</strong>
         If the interactive quiz is unavailable, visit
         <a href="https://schoolhouseconnection.org" target="_blank" rel="noopener noreferrer">
           SchoolHouseConnection.org
         </a>
         for resources.
       </p>
     </div>
   </div>

   <script src="https://cdn.example.org/uhy-quiz.js" defer></script>
   <script>
     window.addEventListener('DOMContentLoaded', () => {
       UHYQuiz.init({
         selector: '[data-uhy-quiz]',
         onStep: ({ id, index }) => {
           // Optional: dataLayer.push({ event: 'uhy_step', id, index });
         },
         onOutcome: ({ id, title }) => {
           // Optional: dataLayer.push({ event: 'uhy_outcome', id, title });
         },
         configOverrides: {
           links: {
             FAFSA: 'https://studentaid.gov/h/apply-for-aid/fafsa'
           }
         }
       });
     });
   </script>
   <noscript>
     <div class="uhyq-fallback" role="note">
       JavaScript is disabled. Find resources at
       <a href="https://schoolhouseconnection.org">SchoolHouseConnection.org</a>.
     </div>
   </noscript>
   ```

   - **Fallback:** Keep the `<div class="uhyq-fallback">` markup inside the container so users without JavaScript still see help content.

3. **Multiple instances:** Add more containers with `data-uhy-quiz`; `UHYQuiz.init()` enhances each.

## Configuration

Override any values via `configOverrides` when calling `init`.

```js
UHYQuiz.init({
  configOverrides: {
    links: {
      FAFSA: 'https://studentaid.gov/h/apply-for-aid/fafsa',
      TEMPLATE_LIAISON: 'https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0'
    },
    i18n: {
      locale: 'en-US'
    }
  }
});
```

| Key | Default | Purpose |
| --- | --- | --- |
| `links.FAFSA` | https://studentaid.gov/h/apply-for-aid/fafsa | FAFSA.gov CTA |
| `links.TEMPLATE_LIAISON` | https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0 | Liaison template letter |
| `links.TEMPLATE_PROGRAM` | https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0 | Shelter/program template |
| `links.TEMPLATE_TRIO` | https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0 | TRIO/GEAR UP template |
| `links.TEMPLATE_FAA` | https://docs.google.com/document/d/1i7Z4b-eQwXLOHdEkzQXGTFDqq_pqxiBmPcNyqc4w48o/edit?tab=t.0 | Financial aid email template |

## Analytics Hooks

- `onStep({ id, index })` fires when a new question is shown (1-based index).
- `onOutcome({ id, title })` fires when the user reaches an outcome.

Use these callbacks to send events to Google Tag Manager, GA4, or another analytics layer.

## Decision Tree

The JSON structure in `src/decisionTree.js` mirrors the official SHC flowchart. Every branch yields one of the required outcomes:

- FAFSA with parent info
- Liaison letter
- Homelessness services program letter
- TRIO/GEAR UP letter
- Financial aid administrator interview

Modify prompts or add translations by editing the JSON (question `prompt` strings and outcome `title/body`).

## Development

- `npm run dev` – builds with sourcemaps and watches for changes.
- Source files live in `src/`; esbuild bundles to `dist/uhy-quiz.js` as an IIFE (global `UHYQuiz`).
- CSS is injected automatically; no separate stylesheet is required at runtime.

## Accessibility Checklist

- Keyboard friendly (Tab/Shift+Tab, Enter/Space, Left/Right arrows for Yes/No).
- Visible focus ring (`box-shadow`) meets contrast guidelines.
- Step region announces updates via `aria-live="polite"`.
- Buttons use `<button>` or `<a>` semantics with descriptive text.
- Supports 320px mobile widths and respects `prefers-reduced-motion`.
- Print stylesheet suppresses controls and expands resource URLs.

## Graceful Degradation

- Keep the fallback note inside the container so non-JS users still see next steps.
- A `<noscript>` block is recommended for CMS templates.
- The runtime preserves the original fallback markup when `destroy()` is called or if initialization fails.

## Shareable Outcomes (Optional)

- Append a hash such as `#path=q1y-q2n-q3n-q4n-q5n-q6n` to the page URL to pre-select answers and jump directly to the resulting outcome.
- Provide these hashes in CMS content or outbound links so students can revisit their saved paths.

## Maintenance Notes

- Update template-letter URLs via `src/config.js` (or `configOverrides`).
- To adjust styling, edit `src/styles.css`; CSS class names are scoped with the `.uhyq-` prefix.
- Future enhancements (translations, additional branches) can be handled entirely through the JSON decision tree and config without changing the renderer.

## License

MIT. Please keep attribution to SchoolHouse Connection when reusing or extending the quiz.


# Say It Without Saying It

A pass-the-phone party word game. One word fills the screen — get your friends
to guess it before the buzzer. Tap the word when they get it, tap Skip when
they don't.

**2,200 words across 10 categories:** Beverages, Food, Movies, TV Shows,
Casinos, South Shore (Lake Tahoe), Colleges, Economics, Chefs, Duke Hoops.
Pick any combination, or hit Select all.

## Run it locally

Requires [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

To check a production build before deploying:

```bash
npm run build
npm run preview
```

## Publish to GitHub Pages

1. Create a new repository on GitHub and push this folder to it.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main`. The included workflow builds and publishes automatically.

Your game will be live at `https://<your-username>.github.io/<repo-name>/`
about a minute later. Every later push to `main` redeploys it.

`vite.config.js` uses `base: "./"` (relative paths), so this works at any URL —
a project page, a user page, or a custom domain — without editing anything.

## Playing on a phone

Open the link on the phone and use **Add to Home Screen**. It launches
fullscreen with no browser chrome, which is what you want when the phone is
getting passed around.

The game requests a screen wake lock during a round so the display doesn't
sleep mid-turn. That needs HTTPS, which GitHub Pages provides.

## Editing the word lists

`word-lists.json` is the master list — the readable source of truth, grouped by
category with counts and notes.

The words the game actually deals live in the `DECKS` constant at the top of
`src/PartyWordGame.jsx`, in the shorter form `[group, isAlcoholic, [...words]]`.

**These two files are separate and must be edited together.** Changing one does
not change the other.

To add a category:

1. Add an entry to `DECKS` in `src/PartyWordGame.jsx`.
2. Add a matching tile to the `cats` array further down the same file.
3. Add the same words to `word-lists.json` to keep the master list honest.

The tile grid is two across and handles an odd number of categories on its own
— the last tile goes full width.

## Notes

- **Saved progress** (settings and which words you've already seen) lives in
  `localStorage` under the `pwg:` prefix. It's per-device and per-browser —
  nothing is uploaded anywhere, and there's no account or server.
- **The family-friendly toggle** filters on an `alcoholic` flag, so it strips
  booze from the Beverages deck. It does **not** filter the Casinos deck, which
  is adult-flavored throughout.
- **When a deck runs out**, the game clears its memory for that selection and
  starts the cycle over, so you never hit a dead end.

## License

Private project — do as you like with it.

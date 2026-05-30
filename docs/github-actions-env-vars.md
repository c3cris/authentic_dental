# Why You Can't Use `GITHUB_` Prefixed Env Vars in GitHub Actions

## What happened

Setting a custom env var starting with `GITHUB_` in a workflow (e.g. `GITHUB_PAGES: true`) is **silently ignored** by GitHub Actions. The variable never reaches the build process.

```yaml
# This does NOT work — GitHub silently discards it
- name: Build
  run: pnpm run build
  env:
    GITHUB_PAGES: true  # ❌ never arrives in process.env
```

This caused `basePath` and `assetPrefix` to never be set in `next.config.mjs`, so Next.js served all assets from `/` instead of `/authentic_dental/`, breaking CSS and JS on GitHub Pages.

## Why it happens

GitHub Actions automatically injects its own variables into every job — all prefixed with `GITHUB_`:

- `GITHUB_SHA`
- `GITHUB_REF`
- `GITHUB_REPOSITORY`
- `GITHUB_WORKSPACE`
- etc.

To protect these, GitHub Actions **blocks any custom env var that starts with `GITHUB_`**. It doesn't throw an error — it just silently drops the value.

Next.js and Node.js are not involved. If the variable had reached `next.config.mjs`, `process.env.GITHUB_PAGES === 'true'` would have worked perfectly.

## The rule

From the [GitHub docs](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#naming-conventions-for-configuration-variables):
> Names must not start with `GITHUB_`.

## The fix

Use any other prefix:

```yaml
# This works ✅
- name: Build
  run: pnpm run build
  env:
    IS_GH_PAGES: true
```

```js
// next.config.mjs
const isPagesDeployment = process.env.IS_GH_PAGES === 'true';
```

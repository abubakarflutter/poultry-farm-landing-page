# Ghani Group landing page

Live at **https://ghani-poultry.web.app**. The page is static HTML in `public/` and is served by Firebase Hosting (project `sikka-poultry-farm`, site `ghani-poultry`).

## Download button

The Download button links to `releases/latest/download/ghani-group.apk` in **this** public repo, so it always serves the newest APK. `/download` on the site redirects there too. The page reads the latest release's version from the GitHub API.

## How new APKs get here

1. The private app repo `abubakarflutter/poultry-farm` runs **Release Android APK**.
2. That workflow pushes a tag `app-v<version>-build<n>` here; the tag's message is the app commit.
3. **Publish app APK** (`.github/workflows/publish-apk.yml`) checks out that commit with a read-only deploy key and builds it with the same signing key. It then publishes `ghani-group.apk`, `ghani-group-arm64.apk` and `ghani-group-arm32.apk` as the latest release.

You can also run **Publish app APK** by hand from the Actions tab.

## Deploying the page

Changes to `public/` on `main` deploy automatically (**Deploy landing page**), using the `FIREBASE_SERVICE_ACCOUNT` secret. The account has only the Firebase Hosting Admin role.

To deploy locally:

```sh
GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json \
  npx firebase-tools deploy --only hosting --project sikka-poultry-farm
```

## Secrets

- `FARM_APP_DEPLOY_KEY`
- `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`
- `FIREBASE_SERVICE_ACCOUNT`

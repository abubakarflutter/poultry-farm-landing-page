# Ghani Group app downloads

This public repo hosts the **Android APK releases** of the Ghani Group member app. The app's source is private (`abubakarflutter/poultry-farm`).

The website, **https://ghani-poultry.web.app**, is the member app itself built for the web. Its landing screen's "Download for Android" button, and `/download` on the site, point to:

```
https://github.com/abubakarflutter/poultry-farm-landing-page/releases/latest/download/ghani-group.apk
```

So the newest release here is always what people download.

## How new APKs get here

1. The private app repo runs **Release Android APK**.
2. That workflow pushes a tag `app-v<version>-build<n>` here; the tag's message is the app commit.
3. **Publish app APK** (`.github/workflows/publish-apk.yml`) checks out that commit with a read-only deploy key and builds it with the same signing key. It publishes `ghani-group.apk`, `ghani-group-arm64.apk` and `ghani-group-arm32.apk` as the latest release.

You can also run **Publish app APK** by hand from the Actions tab.

Secrets:
- `FARM_APP_DEPLOY_KEY`
- `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`

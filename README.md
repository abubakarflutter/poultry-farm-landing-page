# Ghani Group app downloads

This public repo hosts the **Android APK releases** of the Ghani Group member app. The app's source is private (`abubakarflutter/poultry-farm`).

The website, **https://ghani-poultry.web.app**, is the member app itself built for the web. Its landing page's "Download for Android" button, and `/download` on the site, point to:

```
https://github.com/abubakarflutter/poultry-farm-landing-page/releases/latest/download/ghani-group.apk
```

So the newest release here is always what people download.

## How new APKs get here

1. The private app repo runs **Release Android app**.
2. That workflow pushes a tag `app-v<version>-build<n>` here; the tag's message is the app commit.
3. **Publish app APK** (`.github/workflows/publish-apk.yml`) checks out that commit with a read-only deploy key and builds it with `shorebird release android --artifact apk`, signed with the shared key. It publishes `ghani-group.apk` as the latest release.

That build is also the [Shorebird](https://shorebird.dev) release: everyday fixes reach installed apps over the air from the app repo's **Push app update** workflow, without a new download. A new APK is only needed when native code, assets or the Flutter version change.

You can also run **Publish app APK** by hand from the Actions tab (give it the version, build number and app commit).

Secrets:
- `FARM_APP_DEPLOY_KEY`
- `SHOREBIRD_TOKEN` (a Shorebird API key)
- `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`

// Icons, and the latest APK's version from this repo's public releases.
(function () {
  if (window.lucide) window.lucide.createIcons();
  document.getElementById('year').textContent = new Date().getFullYear();

  var repo = 'abubakarflutter/poultry-farm-landing-page';
  var release = document.getElementById('release');
  fetch('https://api.github.com/repos/' + repo + '/releases/latest', {
    headers: { Accept: 'application/vnd.github+json' },
  })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (data) {
      if (!data) return;
      // Tag: app-v1.1.0-build3 → "Version 1.1.0 (build 3)".
      var m = /v(\d+\.\d+\.\d+)-build(\d+)/.exec(data.tag_name || '');
      var apk = (data.assets || []).filter(function (a) { return a.name === 'ghani-group.apk'; })[0];
      var parts = [];
      if (m) parts.push('Version <b>' + m[1] + '</b> (build ' + m[2] + ')');
      if (apk) parts.push(Math.round(apk.size / 1048576) + ' MB');
      if (data.published_at) {
        parts.push(new Date(data.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }));
      }
      if (parts.length) {
        release.querySelector('span').innerHTML = parts.join(' · ');
      }
    })
    .catch(function () { /* Keep the default text. */ });
})();

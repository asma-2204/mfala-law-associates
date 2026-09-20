/* Google Analytics 4 — Muhammad Faheem Anjum Law Associates */
(function () {
  var meta = document.querySelector('meta[name="google-analytics-id"]');
  var id = meta && meta.content ? meta.content.trim() : '';
  if (!/^G-[A-Z0-9]+$/i.test(id)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  gtag('js', new Date());
  gtag('config', id);

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(script);
})();

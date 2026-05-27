// Ember & Oak — tiny client script
(function () {
  // Auto-update copyright year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Highlight today's hours row
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var today = days[new Date().getDay()];
  var rows = document.querySelectorAll('.hours-list li');
  rows.forEach(function (row) {
    var label = row.querySelector('span');
    if (label && label.textContent.trim() === today) {
      row.style.background = 'rgba(210, 105, 30, 0.10)';
      row.style.borderRadius = '8px';
      row.style.padding = '10px 12px';
      row.style.margin = '0 -12px';
      var time = row.querySelectorAll('span')[1];
      if (time) time.style.color = 'var(--ember-deep)';
    }
  });
})();

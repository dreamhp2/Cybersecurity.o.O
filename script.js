document.addEventListener('DOMContentLoaded', function() {
  // Two-column topic switching
  var topicList = document.getElementById('topic-list');
  var contentSections = document.querySelectorAll('.content-section');
  if (topicList) {
    topicList.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        var topic = e.target.getAttribute('data-topic');
        contentSections.forEach(function(section) {
          section.style.display = 'none';
        });
        var showSection = document.getElementById('content-' + topic);
        if (showSection) showSection.style.display = 'block';
      }
    });
  }

  // Enlarge image modal
  var modal = document.getElementById('img-modal');
  var modalImg = document.getElementById('modal-img');
  document.querySelectorAll('.enlargeable').forEach(function(img) {
    img.addEventListener('click', function() {
      modal.style.display = 'flex';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });
  if (modal) {
    modal.addEventListener('click', function() {
      modal.style.display = 'none';
      modalImg.src = '';
    });
  }
});

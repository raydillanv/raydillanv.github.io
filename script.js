const list = document.getElementById('file-list');

fetch(window.location.href.replace('listFolder.html', 'files.json') + '?_=' + new Date().getTime())
  .then(response => response.json())
  .then(fileList => {
    list.innerHTML = ''; // Remove existing list items
    fileList.forEach(file => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = file.url;
      a.textContent = file.name;
      li.appendChild(a);
      list.appendChild(li);
    });
  });

const list = document.getElementById('file-list');

fetch('files.json')
  .then(response => response.json())
  .then(fileList => {
    fileList.forEach(file => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = file.url;
      a.textContent = file.name;
      li.appendChild(a);
      list.appendChild(li);
    });
  });
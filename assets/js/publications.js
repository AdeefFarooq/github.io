
fetch('assets/js/publications.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("pub-list");
    data.forEach(pub => {
      const item = document.createElement("p");
      item.innerHTML = `<strong>${pub.title}</strong><br>${pub.authors}<br><em>${pub.journal}</em> (${pub.year})`;
      container.appendChild(item);
    });
  });

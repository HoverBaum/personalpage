const displayProjects = async (dataUrl) => {
  const containerElement = document.querySelector('#projects')
  const projects = await window.fetch(dataUrl).then(response => response.json())
  const html = projects.map(project => `
  <section class="project">
    <hgroup class="project__header">
      <h3 class="project__title">${project.title}</h2>
      <span class="project__subtitle">${project.subtitle}</span>
    </hgroup>

    <img class="project__image" src="${project.imageUrl}">

    ${project.link ? `
      <a href="${project.link.url}">${project.link.text}</a>
    ` : ''}
    
    <p>${project.description}</p>
    
  </section>
  `).join('')
  containerElement.innerHTML = html
}

window.displayProjects = displayProjects

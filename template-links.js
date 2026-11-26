(() => {
  /** @type {HTMLUListElement} */
  const linkContainer = document.getElementById('link-container')

  /** @type {{name: string, demo?: string, github?: string}[]} */
  const links = [
    { name: 'Todo app', demo: 'todo', github: 'todo' },
    { name: 'Hex color picker clone', demo: 'color-picker', github: 'color-picker' },
    { name: 'Notepad', demo: 'notepad', github: 'notepad' },
    { name: 'Learning SQL', demo: 'sql-tutorial', github: 'sql-tutorial' },
    { name: 'Learning NEAT', github: 'neat' },
    { name: 'Learning 3D graphics', github: '3d' },
  ]

  /**
   * @param {string} page 
   * @returns {string}
   */
  const demoLink = page => `https://alston13r.github.io/${page}/`
  /**
   * @param {string} page 
   * @returns {string}
   */
  const githubLink = page => `https://github.com/alston13r/${page}`
  /**
   * @param {string} link 
   * @param {string} text 
   * @returns {string}
   */
  const anchor = (link, text) => `<a href='${link}' target='_blank'>${text}</a>`

  links.forEach(link => {
    const linkElement = document.createElement('li')
    const pElement = linkElement.appendChild(document.createElement('p'))
    pElement.innerHTML = `${link.name}: ` + [
      link.demo !== undefined ? anchor(demoLink(link.demo), 'Demo') : '',
      link.github !== undefined ? anchor(githubLink(link.github), 'Repo') : ''
    ].filter(i => i.length > 0).join(' - ')
    linkContainer.appendChild(linkElement)
  })
})();
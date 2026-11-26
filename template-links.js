(() => {
  /** @type {HTMLUListElement} */
  const linkContainer = document.getElementById('link-container')

  /** @type {{name: string, demo?: string, github?: string}[]} */
  const links = [
    { name: 'Todo app', demo: 'todo', github: 'todo' },
    // 'Hex color picker clone', 'https://alston13r.github.io/color-picker',
    // 'Notepad', 'https://alston13r.github.io/notepad',
    // 'Learning SQL', 'https://github.com/alston13r/sql-tutorial',
    // 'Learning NEAT', 'https://github.com/alston13r/neat',
    // 'Learning 3D graphics', 'https://github.com/alston13r/3d'
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



// <li>
//   <p>Todo app: {{https://alston13r.github.io/todo/}}</p>
// </li>
// <li>
//   <p>Hex color picker clone: <a href='https://alston13r.github.io/color-picker/'
//       target='_blank'>https://alston13r.github.io/color-picker/</a></p>
// </li>
// <li>
//   <p>Notepad: <a href='https://alston13r.github.io/notepad/'
//       target='_blank'>https://alston13r.github.io/notepad/</a></p>
// </li>
// <li>
//   <p>Learning SQL: <a href='https://github.com/alston13r/sql-tutorial'
//       target='_blank'>https://github.com/alston13r/sql-tutorial</a></p>
// </li>
// <li>
//   <p>Learning NEAT: <a href='https://github.com/alston13r/neat'
//       target='_blank'>https://github.com/alston13r/neat</a></p>
// </li>
// <li>
//   <p>Learning 3D graphics: <a href='https://github.com/alston13r/3d'
//       target='_blank'>https://github.com/alston13r/3d</a></p>
// </li>






// document.querySelectorAll('p').forEach(p => {
//   const split = p.innerText.split(/{{([^}]+)}}/g)
//   if (split.length > 1)
//     p.innerHTML = split.map((s, i) => {
//       if (i % 2 == 0) return s
//       return `<a href='${s}' target='_blank'>${s}</a>`
//     }).join('')
// })
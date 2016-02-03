require('whatwg-fetch')

function populateStudents (students) {
  const wrapper = document.querySelector('.wrapper')
  students['1-1'].forEach((student, index) => {
    let profile = document.createElement('div')
    profile.className = 'profile'
    let name = document.createElement('div')
    name.className = 'name'
    let img = document.createElement('img')
    name.textContent = `${student.name} (${index + 1})`
    img.src = 'http://lorempixel.com/200/250/people/' + student.img
    profile.appendChild(name)
    profile.appendChild(img)
    wrapper.appendChild(profile)
  })
}

fetch('/data/students.json')
  .then(res => {
    return res.json()
  })
  .then(students => {
    populateStudents(students)
  })

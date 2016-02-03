'use strict'
const students = {
  '1-1': [{
    name: 'Joshua Tan',
    img: '6'
  }, {
    name: 'Moses Lim',
    img: '7'
  }, {
    name: 'Alfred Dunhill',
    img: '9'
  }, {
    name: 'Samuel Toot',
    img: '6'
  }, {
    name: 'Jacob Goldstein',
    img: '7'
  }, {
    name: 'Princess Poops',
    img: '9'
  }, {
    name: 'Joshua Waitzkin',
    img: '6'
  }, {
    name: 'Moses Yogen',
    img: '7'
  }, {
    name: 'Cranberry Juice',
    img: '9'
  }, {
    name: 'Samuel Bobbie',
    img: '6'
  }, {
    name: 'James Lim',
    img: '7'
  }, {
    name: 'Penelope Frost',
    img: '9'
  }]
}

console.dir(typeof students)

const wrapper = document.querySelector('.wrapper')

students['1-1'].forEach((student, index) => {
  console.log(student)
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

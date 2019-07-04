let pageNumber = 0
const data = [
  { description: "a Multi-lingual University Graduate", bg: "#edc8ab", circle: "#3e78ed" },
  { description: "a street dancer", bg: "#a1fffe", circle: "#e34a47" },
  { description: "looking for a job in Brand Marketing", bg: "#d3c7f3", circle: "#f7fe00" },
  { description: `letting you <a href="pdf.pdf">download her PDF</a>`, bg: "#faffb8", circle: "#b472e6" },
]

const updatePage = function () {
  const page = data[pageNumber]
  document.querySelector("section.info h2").innerHTML = page.description
  document.querySelector("section.info div.circle").style.backgroundColor = page.circle
  document.querySelector("body").style.backgroundColor = page.bg
}

const next = function () {
  pageNumber = pageNumber + 1
  
  if (pageNumber >= data.length) {
    pageNumber = 0
  }
  
  updatePage()
}

const prev = function () {
  pageNumber = pageNumber - 1
  
  if (pageNumber < 0) {
    pageNumber = data.length - 1
  }
  
  updatePage()
}

const random = function () {
	pageNumber = Math.floor(Math.random() * data.length)
  
  updatePage()
}


document.querySelector("footer img.prev").addEventListener("click", function (event) {
  prev()
  event.preventDefault()
})

document.querySelector("footer img.next").addEventListener("click", function (event) {
  next()
  event.preventDefault()
})

document.querySelector("footer img.random").addEventListener("click", function (event) {
  random()
  event.preventDefault()
})

document.addEventListener("keyup", function (event) {
  if (event.key == "ArrowLeft") {
    prev()
  } else if (event.key == "ArrowRight") {
    next()
  }
})






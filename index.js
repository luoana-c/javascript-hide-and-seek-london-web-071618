function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  list = document.querySelector(".ranked-list li")
  for (i = 0; i < list.length; i++){
     list[i].innerHTML = (list[i].parseInt() + 1).toString()
  }
}
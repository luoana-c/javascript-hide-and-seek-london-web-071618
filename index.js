function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  list = document.querySelectorAll(".ranked-list")
  for (i = 0; i < list.length; i++){
    let children = list[i].children
     list[i].innerHTML = (list[i].parseInt() + 1).toString()
  }
}
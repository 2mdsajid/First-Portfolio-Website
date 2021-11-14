let cir = [['201017', 2010], ['201123', 2011], ['201405', 2014], ['201609', 2016], ['201810', 2018], ['202011', 2020], ['202128', 2021]]
texts = ['Lost the way to home in Delhi','He didn\'t bring mobile in school','I prioritized my study over Internet','Never had an smartphone before 10','Went to Whitehouse in commerce stream','Learned PCB instead of Python','Python instead of JavaScript']

let container = document.querySelector('.cont-cont')

let divs = []

for (j = 0; j < 10; j++) {
  let div = document.createElement('div')
  div.className = `cont cont${j}`

  list = []

  for (i = 1; i < 30; i++) {
    let line = document.createElement('div')
    line.className = 'cont-cir'
    div.append(line)
    list.push(line)
  }
  container.append(div)
  divs.push(list)
}

txt = 'Lost the way to home in Delhi'

function createText(text, col, r) {
  let elem = document.createElement('p')
  elem.classList = 'title'
  elem.textContent = text
  divs[col][r].append(elem)
}


function createDoub(a1, a2, col, r) {
  let elem1 = document.createElement('div')
  let elem2 = document.createElement('div')

  elem1.classList = 'curve ' + a1
  elem2.classList = 'curve ' + a2

  divs[col][r].append(elem1, elem2)
}


function creatMany(attr, col, r1, r2) {
  for (i = r1; i <= r2; i++) {
    let elem = document.createElement('div')
    elem.classList = attr + ' anim'
    divs[col][i].append(elem)
  }
}


function create(attr, col, r,src, date = '2018') {
  let elem = document.createElement('div')
  elem.classList = attr

  if (attr == 'cir') {
    let elem2 = document.createElement('img')
    if (src==''){
      src='unk'
    }
    elem2.src = `photos/timeline/${src}.jpg`

    let elem3 = document.createElement('div')
    elem3.classList = 'date'
    elem3.textContent = date
    elem.append(elem2)
    divs[col][r].append(elem, elem3)
  } else {
    divs[col][r].append(elem)
  }
}

occMidDivs = []
occOutDivs = []
fillDivs = []

//create images
txt = 0
let outIter = 0
let inIter = 0
let r = 3
let c = 5
for (items of cir) {
  create('cir', c, r,items[0], items[1])
  if (!(r % 2 == 0)) {

    //for out
    if (outIter > 0) {

      for (i = 0; i < outIter; i++) {

        createDoub('out-a sec-b', 'out-b sec-b', c - outIter + i, r)

      }
    }

    create('curve out sec-b', c - outIter - 1, r)
    createText(texts[txt], c - 1, r + 2)
    outIter += 1

  } else {

    //for In
    if (inIter > 0) {

      for (i = 0; i < inIter; i++) {

        createDoub('in-a sec-b', 'in-b sec-b', c + inIter - i, r)
      }
    }


    create('curve in sec-b', c + inIter + 1, r)
    createText(texts[txt], c + 1, r + 2)
    inIter += 1
  }

  r += 3
  txt+=1
}

manyLines = [[4,4,8],[4,10,14],[4,16,20],[4,22,25],[3,10,14],[3,16,20],[3,22,25],[2,16,20],[2,22,25],[1,22,25],
[6,7,11],[6,13,17],[6,19,25],[7,13,17],[7,19,25],[8,19,25],[],[],[],[]]

for (lines of manyLines){
  creatMany('line sec', lines[0], lines[1], lines[2])
}

for (i = 0; i < 24; i++) {
  if (!(i % 3 == 0)) {
    create('line prim', 5, i)
  }
}

creatMany('line prim',5,24,25)


//making secondary lines


/*
//1
//create('cir', 5, 3, '2010')
create('curve out sec-b', 4, 3)
createText(txt, 4, 5)
creatMany('line sec', 4, 4, 8)
create('curve out sec-b', 3, 9)
creatMany('line sec', 3, 10, 18)
//creatMany('line prim',5,4,5)


//2
//create('cir', 5, 6, '2011')
create('curve in sec-b', 6, 6)
creatMany('line sec', 6, 7, 16)
create('curve in sec-b', 7, 17)
createText(txt, 6, 8)
creatMany('line sec', 7, 18, 22)
//creatMany('line prim',5,7,8)


//3
//create('cir', 5, 9, '2014')
createDoub('out-a sec-b', 'out-b sec-b', 4, 9)
creatMany('line sec', 4, 10, 14)
//creatMany('line prim',5,10,16)


//4
//create('cir', 5, 12)
createDoub('in-a sec-b', 'in-b sec-b', 6, 17)
creatMany('line sec', 6, 18, 22)
//creatMany('line prim',5,18,22)

//5
//create('cir', 5, 15)
*/

/*
$(document).ready(()=>{
  $('.cont-cont').slideToggle(1)
  setTimeout(()=> {
    $('.cont-cont').slideToggle(10000)
  },1)
})

*/
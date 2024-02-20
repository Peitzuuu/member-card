//修改姓名 - 使用 innerHTML / innerText / textContent 皆可
let name = document.querySelector('.my-name')
name.innerText = "Patty Tai"

// 修改自介 - 使用 innerHTML / innerText / textContent 皆可
let info = document.querySelector('.info')
info.innerText = "Project Mananger"

// 更改照片 - 選出 src 屬性直接賦值 (建議從 Lighthouse Profile 取得圖片連結)
document.querySelector('.my-card__img').src = 'https://i.imgur.com/Gh3vdjS.jpg'

// 增加 Experience 內容 - 選出 ul 以後，使用 innerHTML 加入 li
const ul = document.querySelector('ul')

const li1 = document.createElement('li')
const ol1 = document.createElement('ol')
const li2 = document.createElement('li')
const ol2 = document.createElement('ol')

li1.innerHTML = '行銷專案經理 | 智齡科技股份有限公司 | 2023.8-2023.10'
ol1.innerHTML = '協助公司從0-1舉辦行銷活動，建立專案管理制度'
li2.innerHTML = '專案企劃 | 名衍行銷股份有限公司 | 2020.1-2023.3'
ol2.innerHTML = '全台最大學生聯賽-HBL全系列專案負責人'

ul.append(li1)
ul.append(ol1)
ul.append(li2)
ul.append(ol2)

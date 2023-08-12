const _ = require('lodash');

const yourMission = document.querySelector('.full-modal .custom .mission-list textarea')
yourMission.value = `디바 4인궁 이상 성공하기
겐지 용검 4검 이상 성공하기
정크랫 똥에 2번 이상 맞아죽기
메르시 발키리로 2킬 이상 하기
마이크쓰는 친구 만들어오기
송하나 메카탑승에 깔려 죽기
한명 이상 탈주시키기
에코로 메르시 복제해서 팀원 한명 살리기
라인으로 두명 이상 낙사시키기
상대 누구든 데스 15이상 만들기
오리사로 한명 이상 낙사시키기
힐러로 1만힐 이상, 0데스 달성하기
0딜로 승리하기
30킬 이상하고 패배하기
낙사 4회 이상 당하기 (자살 X)`

const spinBtn = document.querySelector('.btn-zone button.start')
const resultWindow = document.querySelector('.content .result p')

function count(shuffledList, endpoint, index=0, delay=20) {

  let result

  console.log(endpoint)

  if (index < endpoint) {

    setTimeout(() => {

      result = shuffledList[index % shuffledList.length]
      resultWindow.textContent = result

      count(shuffledList, endpoint, index + 1, index < endpoint - 30 ? 20 : delay + 16) /* index가 70 이상 넘어가면 delay가 16씩 누적으로 증가 */
    }, delay)
  } 
  else if (index > endpoint) {
    setTimeout(() => {
      if (Math.random() < 0.5) result = shuffledList[index % shuffledList.length]
      else result = shuffledList[(index-1) % shuffledList.length]

      resultWindow.textContent = result
      resultWindow.style.cssText = `color: #1A5D1A; font-size: 30px;`
      const btnZone = document.querySelector('.content .btn-zone')
      btnZone.style.display = 'flex'
    }, 1500)
  }
}


spinBtn.addEventListener('click', function(){

  const btnZone = document.querySelector('.content .btn-zone')
  btnZone.style.display = 'none'

  let missions = document.querySelector('.full-modal .custom textarea').value
  let shuffledList = _.shuffle(missions.split('\n'))

  resultWindow.style.cssText = `color: black; font-size: 24px;`
  const end = shuffledList.length + 100 + Math.random() * 200
  count(shuffledList, endpoint=end) /* 0 ~ 배열length 중에 랜덤한 값 */
})



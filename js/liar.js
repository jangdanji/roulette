const _ = require('lodash');

const settingZone = document.querySelector('.setting')
const btnZone = document.querySelector('.btn-zone')

const yourMission = document.querySelector('.full-modal .custom .mission-list textarea')
yourMission.value = `오버워치
딥키스
이명박
아이폰
거제
배꼽때냄새
빠삐코`

const startBtn = document.querySelector('.start')

startBtn.addEventListener('click' , function(){
    settingZone.style.display = 'none'
    btnZone.style.display = 'none'

    /* order list 만들기 */

    let allWords = document.querySelector('.full-modal .custom textarea').value
    let word = _.shuffle(allWords.split('\n'))[0]
        
    let headCount = document.querySelector('.head-count').value
        headCount = parseInt(headCount)

    let order = ['당신은 라이어입니다..']

    for (let i = 0; i < headCount - 1; i++) {
        order.push(word)
    }

    order = _.shuffle(order)
    console.log(order)

    /*  */

    const monitor = document.querySelector('.result-monitor')
    monitor.textContent = '여기를 눌러 확인하세요.'

    const checkBtn = document.querySelector('.result')
    let count = 0
    checkBtn.addEventListener('click', function(){
        alert(`${order[count]}`)
        console.log(count)

        if (count == headCount - 1) {
            alert('초기화 합니다..')
            location.reload()
        } 

        count += 1
    
    })

})


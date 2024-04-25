




function deleteScreen(ev) {
    ev.preventDefault()

    const input1 = document.getElementById('P1-name')
    const P1 = input1.value
    const input2 = document.getElementById('P2-name')
    const P2 = input2.value

    const h1 = document.getElementById('TTT')
    h1.remove()

    const form = document.getElementById('Form-Players')
    form.remove()

    screenPlay(P1, P2)
    //restart()
}


function screenPlay(P1name, P2name) {

    const parentDiv = document.getElementById('play')
    const playBoxes = document.getElementById('playBoxes')

    const div1 = document.createElement('div')
    div1.id = 'PlayerV2'

    const input1 = document.createElement('input')
    input1.type = 'text'
    input1.id = 'P1-name'
    input1.value = P1name
    input1.disabled = true
    input1.className = 'P1-class'

    const x = document.createElement('h2')
    x.innerText = 'X'
    x.id = 'XV2'

    const div2 = document.createElement('div')
    div2.id = 'PlayerV2'

    const input2 = document.createElement('input')
    input2.type = 'text'
    input2.id = 'P2-name'
    input2.value = P2name
    input2.disabled = true
    input2.className = 'P2-class'

    const o = document.createElement('h2')
    o.innerText = 'O'
    o.id = 'OV2'

    const vs = document.createElement('h2')
    vs.innerText = 'vs'
    vs.id = 'VS'


    const button1 = document.createElement('button')
    button1.id = "spaces-buttons"
    button1.innerText = " "
    button1.dataset.value = 1
    button1.className = 'B1'

    const button2 = document.createElement('button')
    button2.id = "spaces-buttons"
    button2.innerText = " "
    button2.dataset.value = 2
    button2.className = 'B2'

    const button3 = document.createElement('button')
    button3.id = "spaces-buttons"
    button3.innerText = ""
    button3.dataset.value = 3
    button3.className = 'B3'

    const button4 = document.createElement('button')
    button4.id = "spaces-buttons"
    button4.innerText = " "
    button4.dataset.value = 4
    button4.className = 'B4'

    const button5 = document.createElement('button')
    button5.id = "spaces-buttons"
    button5.innerText = " "
    button5.dataset.value = 5
    button5.className = 'B5'

    const button6 = document.createElement('button')
    button6.id = "spaces-buttons"
    button6.innerText = " "
    button6.dataset.value = 6
    button6.className = 'B6'

    const button7 = document.createElement('button')
    button7.id = "spaces-buttons"
    button7.innerText = " "
    button7.dataset.value = 7
    button7.className = 'B7'


    const button8 = document.createElement('button')
    button8.id = "spaces-buttons"
    button8.innerText = " "
    button8.dataset.value = 8
    button8.className = 'B8'


    const button9 = document.createElement('button')
    button9.id = "spaces-buttons"
    button9.innerText = ""
    button9.dataset.value = 9
    button9.className = 'B9'

    div1.appendChild(x)
    div1.appendChild(input1)


    div2.appendChild(o)
    div2.appendChild(input2)

    parentDiv.appendChild(div1)
    parentDiv.appendChild(vs)
    parentDiv.appendChild(div2)

    playBoxes.appendChild(button1)
    playBoxes.appendChild(button2)
    playBoxes.appendChild(button3)
    playBoxes.appendChild(button4)
    playBoxes.appendChild(button5)
    playBoxes.appendChild(button6)
    playBoxes.appendChild(button7)
    playBoxes.appendChild(button8)
    playBoxes.appendChild(button9)

    startPlay()
}
function restartScreen(ev) {
    ev.preventDefault()
    const playBoxes = document.getElementById('playBoxes')
    const play = document.getElementById('play')
    const section = document.getElementById('Section')
    playBoxes.remove()
    play.remove()
    section.remove()

    const boxCenter = document.getElementById('Center-Box')
    const h1 = document.createElement('h1')
    h1.innerText = 'TIC TAC TOE'
    h1.id = 'TTT'


    const form = document.createElement('form')
    form.id = 'Form-Players'

    const div1 = document.createElement('div')
    div1.id = 'Player'

    const P1 = document.createElement('h2')
    P1.innerText = 'P1'
    const input1 = document.createElement('input')
    input1.type = 'text'
    input1.id = 'P1-name'
    const x = document.createElement('h2')
    x.innerText = 'X'

    const div2 = document.createElement('div')
    div2.id = 'Player'

    const P2 = document.createElement('h2')
    P2.innerText = 'P2'
    const input2 = document.createElement('input')
    input2.type = 'text'
    input2.id = 'P2-name'
    const o = document.createElement('h2')
    o.innerText = 'O'

    const button = document.createElement('button')
    button.innerText = 'Start'
    button.type = 'submit'
    button.id = 'Start2'

    div1.appendChild(P1)
    div1.appendChild(input1)
    div1.appendChild(x)

    div2.appendChild(P2)
    div2.appendChild(input2)
    div2.appendChild(o)


    form.appendChild(div1)
    form.appendChild(div2)
    form.appendChild(button)

    boxCenter.appendChild(h1)
    boxCenter.appendChild(form)


    const section2 = document.createElement('section')
    section2.id = 'Section'
    const play2 = document.createElement('div')
    play2.id = 'play'
    const playBoxes2 = document.createElement('div')
    playBoxes2.id = 'playBoxes'


    section2.appendChild(play2)
    section2.appendChild(playBoxes2)

    boxCenter.appendChild(section2)

    document.getElementById('Start2').addEventListener("click", deleteScreen)
    recriarVar()
}


let vez = 'X'
let input = ""
let nameVez = [], nameVez2 = []



let verific = []
let vetX = [], vetO = [], x = 0, o = 0, empate = 0, empate2 = 0;

function startPlay() {
    nameVez = document.querySelector('#P1-name')
    nameVez.classList.toggle('P1-class')
    nameVez.classList.toggle('P1-class-animation')

    document.querySelectorAll("#spaces-buttons").forEach(function (buttons) {


        buttons.addEventListener("click", function game() {

            if (vez == 'X') {

                input = document.getElementById('P2-name')
                buttons.innerText = vez
                vez = 'O'

                nameVez2 = document.querySelector('#P2-name')
                nameVez2.classList.toggle('P2-class')
                nameVez2.classList.toggle('P2-class-animation')

                nameVez = document.querySelector('#P1-name')
                nameVez.classList.toggle('P1-class-animation')
                nameVez.classList.toggle('P1-class')



                buttons.disabled = true
                buttons.id = 'isX'
                vetX[x] = buttons.dataset.value
                x += 1

                verific = verification()
                if (verific.length > 0) {
                    vez = ""
                    endGame(verific)
                }
            } else if (vez == 'O') {


                input = document.getElementById('P2-name')
                buttons.id = 'isO'
                buttons.innerText = vez
                buttons.disabled = true
                vetO[o] = buttons.dataset.value
                o += 1
                vez = 'X'

                nameVez = document.querySelector('#P1-name')
                nameVez.classList.toggle('P1-class')
                nameVez.classList.toggle('P1-class-animation')

                nameVez2 = document.querySelector('#P2-name')
                nameVez2.classList.toggle('P2-class-animation')
                nameVez2.classList.toggle('P2-class')



                verific = verification()

                if (verific.length > 0) {
                    vez = ""
                    endGame(verific)
                }





            }
            empate = 0
            document.querySelectorAll("#spaces-buttons").forEach(function (btnConfirm) {
                if (btnConfirm.disabled === false) {
                    empate++
                }
            })
            if (empate === 0) {
                verific = verification()
                if (verific.length === 0) {
                    const vazio = []
                    endGame(vazio)
                }
            }
        })
    })

}

function endGame(verific) {
    const button1 = document.querySelector('.B' + verific[0])
    const button2 = document.querySelector('.B' + verific[1])
    const button3 = document.querySelector('.B' + verific[2])
    let winner = 0

    if (verific.length !== 0) {
        button1.classList.toggle('B' + verific[0])
        button1.classList.toggle('victory')

        button2.classList.toggle('B' + verific[1])
        button2.classList.toggle('victory')

        button3.classList.toggle('B' + verific[2])
        button3.classList.toggle('victory')
        winner = verific[3]
    } else {
        const inputRemove = document.getElementById('P2-name')
        const O = document.getElementById('OV2')


        const vs = document.getElementById('VS')
        inputRemove.remove()
        O.remove()
        vs.remove()

        const inputRemove2 = document.getElementById('P1-name')
        const X = document.getElementById('XV2')
        inputRemove2.remove()
        X.remove()

        const play = document.getElementById('play')


        const empate = document.createElement('h1')
        empate.innerText = 'EMPATE!'
        empate.id = 'Empate'
        play.appendChild(empate)
    }




    if (winner === 'X') {
        const inputRemove = document.getElementById('P2-name')
        const O = document.getElementById('OV2')
        const vs = document.getElementById('VS')
        inputRemove.remove()
        O.remove()
        vs.remove()

        const X = document.getElementById('XV2')
        X.innerText = 'VENCEDOR!'

    } else if (winner === 'O') {
        const inputRemove = document.getElementById('P1-name')
        const X = document.getElementById('XV2')
        const vs = document.getElementById('VS')
        inputRemove.remove()
        X.remove()
        vs.remove()

        const O = document.getElementById('OV2')
        O.innerText = 'VENCEDOR!'
    }

    const voltarDiv = document.getElementById('Section')
    const voltar = document.createElement('button')
    voltar.innerText = 'Voltar'
    voltar.className = 'voltarBtn'
    voltar.id = 'voltarId'
    voltarDiv.appendChild(voltar)


    document.getElementById('voltarId').addEventListener("click", restartScreen)

}
function recriarVar() {
    vez = 'X'
    input = ""
    nameVez = []
    nameVez2 = []

    verific = []
    vetX = []
    vetO = []
    x = 0
    o = 0
    empate = 0
    empate2 = 0;
    dataValue = []
    btnValidado = []
    botao = ''
    vetor = []
    vetor2 = [];
}
const matConfirm = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']]


let validador, validador2, i, j, inclui, dataValue = [], btnValidado = [], k, botao = '', vetor = [], vetor2 = [];

function verification() {
    let validaX = ''
    for (i = 0; i < matConfirm.length; i++) {
        validador = 0
        k = 0
        for (let j = 0; j < matConfirm[i].length; j++) {

            if (vetX.includes(matConfirm[i][j])) {
                validador += 1
                vetor[k] = matConfirm[i][j]
                k++
            }

        }
        if (validador === 3) {

            vetor2 = vetor
            vetor2[k] = 'X'
            return vetor2
        }

    }

    let validaO = ''
    for (i = 0; i < matConfirm.length; i++) {
        validador2 = 0
        k = 0
        for (j = 0; j < 3; j++) {
            if (vetO.includes(matConfirm[i][j])) {
                validador2 += 1
                vetor[k] = matConfirm[i][j]
                k++
            }

        }
        if (validador2 === 3) {

            vetor2 = vetor
            vetor2[k] = 'O'
            return vetor2
        }

    }

    return []
}





document.getElementById('Start').addEventListener("click", deleteScreen)

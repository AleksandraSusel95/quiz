//1. jakie elementy musimy pobrać
const form = document.querySelector('.quiz-box')
const answers = Array.from(document.querySelectorAll('.answer'))
//dodajemy Array.from , zamienia obiekty tablicopodobne na tablice
const modal = document.querySelector('.modal')
const modalInfo = modal.querySelector('p')
const modalBtn = modal.querySelector('.close-modal')
const allQuestions = document.querySelectorAll('.question') //do punktu 5
//2. Quiz będzie walidowany na submit wiec tworzymy funkcje do zarządzania quizem
//3. Naprawiamy domyślne zachowanie buttona 

const handleQuiz = event => {
    event.preventDefault();
    const checkedAnswers = answers.filter(answer => answer.checked);
    const isTrue = checkedAnswers.every(answer => answer.value === 'true')
    const allChecked = checkedAnswers.length === allQuestions.length


    if (!allChecked) {
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Wybierz wszystkie odpowiedzi!'
        return

    } else {
        modal.classList.remove('modal-active')
    }

    checkedAnswers.forEach(answer => {
        const checkIfcorrect = answer.value === 'true'
        const answerBox = answer.closest('.answer-box')

        if (checkIfcorrect) {
            answerBox.classList.add('correct')
            answerBox.classList.remove('incorrect')
        } else {
            answerBox.classList.add('incorrect')
            answerBox.classList.remove('correct')
        }

    })
    if (isTrue && allChecked) {
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Brawo, wszystko poprawnie'
    } else {
        modal.classList.add('modal-active');
        modalInfo.textContent = 'Niestety przegrywasz :('
    }
}


const closeModal = () => {
    modal.classList.remove('modal-active');
}

modalBtn.addEventListener('click', closeModal);
form.addEventListener('submit', handleQuiz);
    
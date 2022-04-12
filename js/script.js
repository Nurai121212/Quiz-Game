let quizHead = document.querySelector('.quiz-question');
let buttons = document.querySelector('.buttons');
let quizPage = document.querySelector('.quiz-page');

class Question{
  constructor(question,answers){
    this.question= question;
    this.answers = answers;
  };
  AnswerValue(i){
    return this.answers[i].value;
  }
};

class Answer{
  constructor(text, value){
    this.text = text;
    this.value = value;
  }
};

class Quiz{
  constructor(question){
    this.question = question;

    this.score = 0;

    this.current = 0;
  };
  Click(i){
    let value = this.question[this.current].AnswerValue(i);
    this.score += value;

    this.Next();
  };
  Next(){
    this.current++;

    if(this.current >= this.question.length)
    {
      this.End();
    }
    
  };
  End(){
    return this.score;
  }
};

//Answers
let question = [
  new Question('как называются четыре Факультета Хогвартса?',[
    new Answer('Гриффиндор, Пуффендуй, Когтевран и Слизерин', 1),
    new Answer('Грифон, Ворон, Слон и Змея', 0),
    new Answer('Север, Восток, Запад и Юг', 0),
    new Answer('Красный, Синий, Зеленый и Оранжевый', 0)
  ]),
  new Question(' что является национальным животным Шотландии?',[
    new Answer('лошадь', 0),
    new Answer('единорог', 1),
    new Answer('волк', 0),
    new Answer('корова', 0)
  ]),
  new Question('зачем к женским трусам всегда пришивают бантики',[
    new Answer('благодаря бантику трусики можно надеть правильной стороной в темноте', 1),
    new Answer('потому что это секси', 0),
    new Answer('дань истории женским панталонам', 0),
    new Answer('не бантики а розочки', 0)
  ]),
  new Question('смертельная доза агуши',[
    new Answer('100 упаковок', 0),
    new Answer('69 упаковки', 0),
    new Answer('44 упаковки', 1),
    new Answer('от агуши еще никто не умирал', 0)
  ]),
  new Question('из чего сделан самый крепкий дом в “Трех поросятах”?',[
    new Answer('кирпич', 1),
    new Answer('палочки', 0),
    new Answer('солома', 0),
    new Answer('бамбук', 0)
  ]),
  new Question('как называется маленький пластмассовый кусочек на конце шнурка?',[
    new Answer('строка', 0),
    new Answer('чехол', 0),
    new Answer('кружево', 0),
    new Answer('аглет', 1)
  ]),
  new Question('сколько длится мгновение?',[
    new Answer('60 секунд', 0),
    new Answer('90 секунд', 1),
    new Answer('120 секунд', 0),
    new Answer('180 секунд', 0)
  ]),
  new Question('как долго длилась Столетняя война?',[
    new Answer('116 лет', 1),
    new Answer('100 лет', 0),
    new Answer('50 лет', 0),
    new Answer('101 год', 0)
  ])
];

let quiz = new Quiz(question);

Update();

function Update(){
  if(quiz.question.length > quiz.current){

    quizHead.innerHTML = quiz.question[quiz.current].question;

    buttons.innerHTML = '';

    for(let i = 0; i < quiz.question[quiz.current].answers.length; i++){
      let btn = document.createElement('button');
      btn.classList.add('quiz-button');
      btn.innerHTML = quiz.question[quiz.current].answers[i].text;
      btn.setAttribute('index', i);

      buttons.appendChild(btn);
    };

    quizPage.innerHTML = (quiz.current + 1) + '/' + quiz.question.length;

    Init();

  }else if(quiz.question.length = quiz.current){
    alert('Your Score ' + quiz.End() + '/' + quiz.question.length);

    if(confirm('Начать заново тест ?')){
      location.reload();
    }
  }
};

function Init(){
  let btns = document.querySelectorAll('.quiz-button');

  for(let i = 0; i < btns.length;i++){
    btns[i].addEventListener('click', function(){
      quiz.Click(btns[i].getAttribute('index'));
      Update();
    })
  }
}
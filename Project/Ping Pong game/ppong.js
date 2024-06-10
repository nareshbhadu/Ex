let props = {
    boxHeight: 200,
    boxWidht: 30,
    boxBG: 'blue',
    box1MT: 0,
    ballDiameter: 30,
    ballBG: 'red',
    ballMT: 300,
    ballML: 500,
    ballSpeedX: 2,
    ballSpeedY: 2,
    ballDirX: +1,
    ballDirY: +1,
}
let ti = 1;
let score = 0;
let disp = document.getElementById('score');

let box1 = document.createElement('div');
box1.style.height = props.boxHeight + 'px';
box1.style.width = props.boxWidht + 'px';
box1.style.background = props.boxBG;
box1.style.borderRadius = '20px'
box1.style.left = '20px';

let box2 = document.createElement('div');
box2.style.height = props.boxHeight + 'px';
box2.style.width = props.boxWidht + 'px';
box2.style.background = props.boxBG;
box2.style.borderRadius = '20px'
box2.style.right = '20px';

let ball = document.createElement('div')
ball.style.height = props.ballDiameter + 'px';
ball.style.width = props.ballDiameter + 'px';
ball.style.borderRadius = '50%';
ball.style.background = props.ballBG;
ball.style.marginTop = props.ballMT + 'px';
ball.style.marginLeft = props.ballML + 'px';

function track(event){
    props.box1MT = event.clientY - props.boxHeight/2;
    box1.style.marginTop = props.box1MT + 'px';
}

let interval = setInterval(() => {
    props.ballMT += props.ballSpeedY * props.ballDirY;
    props.ballML += props.ballSpeedX * props.ballDirX;

    if(props.ballMT + props.ballDiameter > window.innerHeight || props.ballMT < 0)
        props.ballDirY *= -1;

    if(props.ballML + props.ballDiameter > window.innerWidth - props.boxWidht - 20)
        props.ballDirX *= -1;

    if(props.ballML < props.boxWidht + 20 && props.box1MT < props.ballMT + props.ballDiameter && props.box1MT + props.boxHeight > props.ballMT + props.ballDiameter){
        props.ballDirX *= -1;
        score++;
        disp.innerHTML = "Score: " + score;
    }
    
    if(score > 1){
        ti = 0.5;
    }
    if(props.ballML < 20 + props.boxWidht/2){
        clearInterval(interval)
        document.body.removeChild(ball)
        alert('Game over, Your score is ' + score)
    }
    ball.style.marginTop = props.ballMT + 'px';
    ball.style.marginLeft = props.ballML + 'px';

    box2.style.marginTop = props.ballMT + props.ballDiameter/2 - props.boxHeight/2 + 'px';
}, ti)
document.body.appendChild(box1)
document.body.appendChild(box2)
document.body.appendChild(ball)
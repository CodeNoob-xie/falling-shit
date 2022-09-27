var human;
var apples = [];
var barriers = [];
var score = 0;
var scoreElement;
var currentGameState;

var buttonTry;

const GameState =
    {
        MainMenu: "main_menu",
        Playing: "playing",
        GameOver: "game_over"
    }

function setupBackground()
{
    background(0);
}

function setup()
{
    scoreElement = createDiv('Score: ' + score);
    scoreElement.position(20, 20);
    scoreElement.id = 'score';
    scoreElement.style('color', 'white');

    currentGameState = GameState.Playing

    createCanvas(450, 700);
    human = new Human();

    currentGameState = GameState.MainMenu;
}

function startPlaying()
{
    setupBackground();

    currentGameState = GameState.Playing;
    score = 0;
    scoreElement.html('Score: ' + score);
    scoreElement.position(20, 20);

    buttonTry.hide();

    for (var i = barriers.length-1; i >= 0; i--)
    {
        barriers.splice(i, 1);
    }

    for (var i = apples.length-1; i >= 0; i--)
    {
        apples.splice(i, 1);
    }
}

function draw()
{
    setupBackground();

    if (currentGameState == GameState.MainMenu)
    {
        if (!buttonTry)
        {
            buttonTry = createButton('Play!');
        }
        buttonTry.position(200, 350);
        buttonTry.mousePressed(startPlaying);
    }
    else if (currentGameState == GameState.Playing)
    {
        human.show();

        if (frameCount % 100 == 0)
        {
            barriers.push(new Barrier());
        }

        if (frameCount % 200 == 0)
        {
            randNum = random([1,2,3,4,5]);
            if (randNum % 2 == 0)
            {
                apples.push(new Apple());
            }
        }

        for (var i = apples.length-1; i >= 0; i--)
        {
            apples[i].show();
            apples[i].update();

            if (apples[i].hit(human))
            {
                if (apples[i].IsPoison)
                {
                    score -= 3;
                }
                else
                {
                    score += 3;
                }
                scoreElement.html('Score: ' + score);
                apples.splice(i, 1);
                continue;
            }

            if (apples[i].hasPassed())
            {
                apples.splice(i, 1);
            }
        }

        for (var i = barriers.length-1; i >= 0; i--)
        {
            barriers[i].show();
            barriers[i].update();

            if (barriers[i].hit(human))
            {
                console.log("Human hit!!!");
                currentGameState = GameState.GameOver;
            }

            if (barriers[i].hasPassed())
            {
                barriers.splice(i, 1);
                score += 1;
                scoreElement.html('Score: ' + score);
            }
        }
    }
    else if (currentGameState == GameState.GameOver)
    {
        setupBackground();

        scoreElement.position(150,330);
        scoreElement.style('font-size', '30px')
        scoreElement.html('Final score: ' + score);

        buttonTry.show();
        buttonTry.position(200, 400);
        buttonTry.mousePressed(startPlaying);
    }
}

function keyPressed()
{
    if (keyCode == LEFT_ARROW)
    {
        human.goLeft();
        //console.log("Left");
    }
    else if (keyCode == RIGHT_ARROW)
    {
        human.goRight();
        //console.log("Right");
    }
}

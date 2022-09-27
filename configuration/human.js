var HUMAN_HEIGHT = 100;
var HUMAN_WIDTH = 40;
var HUMAN_STEP_WIDTH = 30;

function Human()
{
    this.x = HUMAN_STEP_WIDTH * 3;
    this.y = height - HUMAN_HEIGHT;

    this.show = function()
    {
        fill(255);
        rect(this.x, this.y, HUMAN_WIDTH, HUMAN_HEIGHT);
    };

    this.goLeft = function()
    {
        if (this.x < HUMAN_STEP_WIDTH)
            return;

        this.x -= HUMAN_STEP_WIDTH;
    }

    this.goRight = function()
    {
        if (this.x + HUMAN_WIDTH > width - HUMAN_STEP_WIDTH)
            return;

        this.x += HUMAN_STEP_WIDTH;
    }
}

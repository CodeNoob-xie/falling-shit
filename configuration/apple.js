var APPLE_HEIGHT = 20
var APPLE_WIDTH = 20

function Apple()
{
    this.x = random(20, width-20);
    //this.x = 200;
    this.y = 0;

    this.gravity = 0.07;
    this.velocity = 0;

    //this.IsPoison = false;
    this.IsPoison = random([false,true]);

    this.show = function()
    {
        if (this.IsPoison)
        {
            fill(138, 43, 226);
        }
        else
        {
            fill(255,0,0);
        }

        ellipse(this.x, this.y, APPLE_WIDTH, APPLE_HEIGHT);
    };

    this.update = function()
    {
        this.velocity += this.gravity;
        this.y += this.velocity;
    }

    this.hit = function(human)
    {
        if (this.x > human.x && this.x < human.x + HUMAN_WIDTH)
        {
            if (this.y > human.y)
            {
                this.isHit = true;
                return true;
            }
        }
        return false;
    };

    this.hasPassed = function()
    {
        if (this.y - APPLE_HEIGHT > height)
            return true;

        return false;
    };
}

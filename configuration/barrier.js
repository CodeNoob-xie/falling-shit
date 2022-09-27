function Barrier()
{
    this.left = random(width * 0.85);
    this.right = width - (this.left + (random(2,3) * HUMAN_WIDTH));
    console.log(this.left);
    console.log(this.right);

    this.y = 0;

    this.h = 20;

    //this.speed = random (8,14);
    this.speed = 6;

    this.isHit = false;

    //console.log(this.left);
    //console.log(this.right);

    this.show = function()
    {
        fill(0,0,255);

        if (this.isHit)
        {
            fill(255, 0, 0);
        }

        rect(0, this.y, this.left, this.h);
        rect(width - this.right, this.y, this.right, this.h);
    };

    this.hasPassed = function()
    {
        if (this.y > height + this.h)
            return true;

        return false;
    };

    this.hit = function(human)
    {
        if (human.y > this.y && human.y < this.y + this.h)
        {
            if (human.x < this.left || human.x > width - this.right - HUMAN_WIDTH)
            {
                this.isHit = true;
                return true;
            }
        }
        return false;
    };

    this.update = function()
    {
        this.y += this.speed;
    };
}

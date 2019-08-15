(function () {
    function prepare() {
        // load img task
       const imgTask = (img,src)=>{
           new Promise((resolve,reject)=>{
               img.onload = resolve;
               img.onerror = reject;
               img.src = src;
           })
       };
       const context = document.getElementById('content').getContext('2d');
       const heroImg  = new Image();
       const allSpriteImg = new Image();

       const allResourceTask = Promise.all([
           imgTask(heroImg,'./hero.png'),
           imgTask(allSpriteImg,'./all.jpg')
       ]);

       return {
           getResource(callBack){
               allResourceTask.then(()=>{
                   callBack && callBack(context,heroImg,allSpriteImg)
               })
           }
       }
    }

    function drawHero(context, heroImg, allSpriteImg) {

        var draw = function () {
            this.context
                .drawImage(
                    this.img,
                    this.imgPos.x,
                    this.imgPos.y,
                    this.imgPos.width,
                    this.imgPos.height,
                    this.rect.x,
                    this.rect.y,
                    this.rect.width,
                    this.rect.height
                );
        };

        function move(dir, monsterRect, canvasScope) {
            switch (dir) {
                case 'down':
                    if (this.rect.y + this.rect.height < canvasScope.height) {
                        if (!(this.rect.x >= monsterRect.x - this.rect.width && this.rect.x <= monsterRect.x + monsterRect.width && this.rect.y >= monsterRect.y - this.rect.height && this.rect.y <= monsterRect.y)) {
                            this.context
                                .clearRect(
                                    this.rect.x,
                                    this.rect.y,
                                    this.rect.width,
                                    this.rect.height,
                                );
                            this.context
                                .drawImage(
                                    this.img,
                                    this.imgPos.x,
                                    this.imgPos.y,
                                    this.imgPos.width,
                                    this.imgPos.height,
                                    this.rect.x,
                                    this.rect.y += 5,
                                    this.rect.width,
                                    this.rect.height,
                                );
                        }
                    }
                    break;
                case 'up':
                    if (this.rect.y > 0) { // 画布上边界
                        if (!(this.rect.x >= monsterRect.x - this.rect.width && this.rect.x <= monsterRect.x + monsterRect.width && this.rect.y >= monsterRect.y + monsterRect.height && this.rect.y <= monsterRect.y + monsterRect.height)) {
                            this.context
                                .clearRect(
                                    this.rect.x,
                                    this.rect.y,
                                    this.rect.width,
                                    this.rect.height,
                                );
                            this.context
                                .drawImage(
                                    this.img,
                                    this.imgPos.x,
                                    this.imgPos.y,
                                    this.imgPos.width,
                                    this.imgPos.height,
                                    this.rect.x,
                                    this.rect.y -= 5,
                                    this.rect.width,
                                    this.rect.height,
                                );
                        }
                    }
                    break;
                case 'left':
                    if (this.rect.x > 0) { // 画布左边界
                        if (!(this.rect.x >= monsterRect.x + monsterRect.width && this.rect.x <= monsterRect.x + monsterRect.width && this.rect.y >= monsterRect.y - this.rect.height && this.rect.y <= monsterRect.y + monsterRect.height)) {
                            this.context
                                .clearRect(
                                    this.rect.x,
                                    this.rect.y,
                                    this.rect.width,
                                    this.rect.height,
                                );
                            this.context
                                .drawImage(
                                    this.img,
                                    this.imgPos.x,
                                    this.imgPos.y,
                                    this.imgPos.width,
                                    this.imgPos.height,
                                    this.rect.x -= 5,
                                    this.rect.y,
                                    this.rect.width,
                                    this.rect.height,
                                );
                        }
                    }
                    break;
                case 'right':
                    if (this.rect.x + this.rect.width < canvasScope.width) { // 画布右边界
                        if (!(this.rect.x >= monsterRect.x - this.rect.width && this.rect.x <= monsterRect.x && this.rect.y >= monsterRect.y - this.rect.height && this.rect.y <= monsterRect.y + monsterRect.height)) {
                            this.context
                                .clearRect(
                                    this.rect.x,
                                    this.rect.y,
                                    this.rect.width,
                                    this.rect.height,
                                );
                            this.context
                                .drawImage(
                                    this.img,
                                    this.imgPos.x,
                                    this.imgPos.y,
                                    this.imgPos.width,
                                    this.imgPos.height,
                                    this.rect.x += 5,
                                    this.rect.y,
                                    this.rect.width,
                                    this.rect.height,
                                );
                        }
                    }
                    break;
                default:
                    break;
            }
        }


        function Hero () {
            this.img =  heroImg;
            this.context= context;
            this.imgPos={
                x: 0,
                y: 0,
                width: 32,
                height: 32
            };

            this.rect = {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }
        }


        Hero.prototype = {
            draw: draw,
            move:move,
        };

        function getRect() {
            return this.rect;
        }

        Monster.prototype = {
            draw: draw,
            getRect: getRect,
        };

        function Monster (initPos) {
            this.img = allSpriteImg;
            this.context= context;
            this.imgPos={
                x: 858,
                y: 529,
                width: 32,
                height: 32
            };

            this.rect = {
                x: initPos.x,
                y: initPos.y,
                width: 40,
                height: 40
            };
        }

        RedMonster.prototype = Object.create(Monster.prototype);
        function RedMonster(initPos){
            Monster.call(this,initPos);
            this.imgPos={
                x: 858,
                y: 497,
                width: 32,
                height: 32
            };
        }

        var hero = new Hero();
        hero.draw();
        var monster = new Monster({x:100,y:100});
        monster.draw();
        var redMonster = new Monster({x:150,y:150});
        redMonster.draw();

        document.addEventListener('keydown', (e) => {
            if (e) {
                if (e.keyCode === 37) { // 左
                    hero.move('left', monster.getRect(), { width: 500, height: 300 }); // 方向键 怪物区域 画布区域
                }
                if (e.keyCode === 38) { // 上
                    hero.move('up', monster.getRect(), { width: 500, height: 300 });
                }
                if (e.keyCode === 40) { // 下
                    hero.move('down', monster.getRect(), { width: 500, height: 300 });
                }
                if (e.keyCode === 39) { // 右
                    hero.move('right', monster.getRect(), { width: 500, height: 300 });
                }
            }
        });

    }


    var resourceManager = prepare();
    resourceManager.getResource(drawHero)

})();

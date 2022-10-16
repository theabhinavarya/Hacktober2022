import pygame as pg
import random

pg.init()
#Game Display
screen=pg.display.set_mode((800, 600))#(width, hiegth)
run_status=True

#Title
pg.display.set_caption("Space Invaders")

#icon
icon=pg.image.load('logo.png')
pg.display.set_icon(icon)

#Background
background=pg.image.load('Background.png')

#player
playerImg=pg.image.load('sship_03.png')
playerX=370
playerY=480
player_speed=0

#enemy
pics=['enemy_01.png', 'enemy_02.png', 'enemy_03.png']
enemyImg=[]
enemyX=[]
enemyY=[]
enemy_speed=[]
for i in range(7):
    enemyImg.append(pg.image.load(random.choice(pics)))
    enemyX.append(random.randint(2, 736))
    enemyY.append(random.randint(0, 150))
    enemy_speed.append(1)

#laser
laserImg=pg.image.load('laser.png')
laserX=playerX
laserY=playerY
laser_speed=4
fire_status=False

#score
score_value=0
score_font=pg.font.Font('freesansbold.ttf', 32)
textX=10
textY=10

#GameOver
g_over=pg.font.Font('freesansbold.ttf', 64)

def game_over(x=200, y=250):
    gameOver=g_over.render("GAME OVER", True, (255, 255, 255))
    screen.blit(gameOver, (x, y))

def show_score(x, y):
    score=score_font.render(f"score: {str(score_value)}", True, (255, 255, 255))
    screen.blit(score, (x, y))

def player(x=playerX, y=playerY, img=playerImg): #defining player positions
    screen.blit(img, (x, y))

def enemy(x=enemyX, y=enemyY, img=enemyImg): #defining enemy positions
    screen.blit(img, (x, y))

def laser(x=playerX, y=playerY, img=laserImg): #defining laser positions
    screen.blit(img, (x-2, y))
    screen.blit(img, (x+34, y))

def collision(x1,y1,x2,y2): #collision
    global distance
    distance=((x1-x2)**2+(y1-y2)**2)**0.5
    if distance <=27:
        return True
    return False
#game loop
while run_status:
    screen.fill((10, 10, 100))#RGB
    screen.blit(background, (0, 0))

    for event in pg.event.get(): #gets all the events, i.e. player inputs
        if event.type==pg.QUIT:
            run_status=False
        if event.type==pg.KEYDOWN:
            if event.key==pg.K_LEFT or event.key==pg.K_a:
                player_speed=-2
            if event.key==pg.K_RIGHT or event.key==pg.K_d:
                player_speed=2
            if (event.key==pg.K_SPACE or event.key==pg.K_KP_0) and fire_status==False:#fire
                fire_status=True
                laserX=playerX
                laserY=playerY
        if event.type==pg.KEYUP:
            if event.key==pg.K_LEFT or event.key==pg.K_a or event.key==pg.K_RIGHT or event.key==pg.K_d:
                player_speed=0
    
    playerX+=player_speed
    #player boundary
    if playerX<0:
        playerX=0
    elif playerX>736:
        playerX=736

    for i in range(len(enemyX)):
        enemyX[i]+=enemy_speed[i]
        #enemy movements
        if enemyX[i]<0:
            enemyY[i]+=40
            enemy_speed[i]=1
        elif enemyX[i]>736:
            enemyY[i]+=40
            enemy_speed[i]=-1
        if enemyY[i]>200:
            game_over()
            break
        
        if (enemyY[i]>=laserY-32 and enemyY[i]<=laserY+32) and (enemyX[i]>=laserX-40 and enemyX[i]<=laserX+40):
            enemyX[i]=random.randint(0, 736)
            enemyY[i]=random.randint(0, 150)
            enemy_speed[i]=1
            enemyImg[i]=pg.image.load(random.choice(pics))
            laserY=playerY
            fire_status=False
            score_value+=1
        enemy(enemyX[i], enemyY[i], enemyImg[i])#calling enemy


    if  fire_status:
        laserY-=laser_speed
        laser(laserX, laserY)

    #respawn bullet and enemy
    if laserY<=0:
        laserY=playerY
        fire_status=False
    show_score(textX, textY)
    player(playerX, playerY)#calling player
    pg.display.update()#updates the display after the changes made
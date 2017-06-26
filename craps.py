#Craps Game
#imports
import random

#program begins
dice_options = [2,3,3,4,4,4,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,10,10,10,11,11,12]
bankroll = int(200)
pass_line_bet = int(5)
point = []

def comeout_roll():
    result = (random.choice(dice_options))
    if result == 7:
        print('7, pay the line')
        bankroll = bankroll + bet
    else:
        point.append(result)
        print ('The point is:')
        print(result)


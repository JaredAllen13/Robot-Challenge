Technical Challenge 1
You have been given a challenge to develop a path finding algorithm for a mining robot.  The goal of the mining robot is to collect 
all of the core samples and return the samples to the research post.   The robot is provided a map of the locations that require 
a core sample to be drilled.  The map follows the four standard cardinal directions north, south, east or west.  The robot is only 
able to hold five core samples at a time.
Robot Commands
The robot will respond to the following commands and each issued command counts as one move:

NORTH – Move north by 1 unit (Yes, North is up.)
SOUTH – Move south by 1 unit
EAST – Move east by 1 unit
WEST – Move west by 1 unit
DIG – Dig a core sample
DROP – Drop samples at research post 
Map
The areas to be sampled will be provided in a list that is X by Y.  The map is always a square or a rectangle and the values of 
X & Y are never less than 2 and never greater than 100.

‘*’ – Designates the robots location
‘r’ – Designates the research post location
‘s’ – Designates the location of a required core sample
‘-‘ – Designates an empty location

In the case where a robot is on the same location as a post or sample, the input will show the post or sample and no robot 
marker will be present.  A sample cannot exist in the same location as a research post.

Input
All input by your program should be received on STDIN.

The input consists on the bot location, number of samples held by the robot, n number of lines of the map, and the n number 
of lines of the map.	Output
All output by your program should be on STDOUT.

The output is only one command for the current move.	State After Move
The state machine will take and process your move and return the next state to the STDIN of your next program execution.

Score
Your score will be based on the efficiency of the number of moves it takes to complete the task.  The robot should complete 
the collection and drops in less than 350 moves.
Task
Write a program in the language of your choice that takes the input from STDIN and determines the next action and prints that 
action to STDOUT.  Each time the program is run, it will use the input state to determine the next move.  The program should 
only output one move per execution.

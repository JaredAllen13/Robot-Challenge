
/********************Main Additional Functions***********************************************/
function moveNorth(mapObject){

}
         
function moveSouth(mapObject){

}
           
function moveEast(mapObject){

}
           
function moveWest(mapObject){

}
         
function moveDig(mapObject){

}
           
function moveDrop(mapObject){

}





/********************Applicant Functions****************************************************/


function headToBase(mapObject){ //determins the direction to return to resouce base

}

function sampleCount(mapObject){ //verifies there are more samples out there to collect

}

function countMovesToDestination(destXCord, destYCord, startXCord, startYCord){ //counts total number of moves needed to get from start location to destination
    return (Math.abs(destXCord - startXCord) + Math.abs(destYCord - startYCord))
}

function headToSample(mapObject){ //determins the direction to the nearest sample
    

}



function robotMoveMain(mapObject) {
//check robot sample count, if it is 5 head scan for resource base, if less than 5 scan for nearest resource 


//check robot current location 
//if at resource base and sample count > 0  return drop to dump samples if we accidentally end up on R while heading to another sample

//if at sample and we are under max capactity return dig

//if we are at an empty space and under capactiy return direction of closest sample

//if we are at an empty space and at capactiy or if there are no samples remaining return direction of resource base



    
}

/********************Main Function**********************************************************/
//create the sample map object

var testMap = {
    xLocation: 0, yLocation: 0,
    botSampleCount: 0,
    numberOfLines: 10,
    resourceMap: [['*','-','-','-','-','-','s','-','-','-'], 
                  ['-','-','-','s','-','-','-','-','-','-'],
                  ['-','s','-','-','-','-','s','-','-','-'],
                  ['-','-','-','-','-','-','-','-','-','-'],
                  ['-','-','-','-','-','-','-','-','s','-'],
                  ['-','-','-','-','-','s','-','-','-','-'],
                  ['-','-','r','-','-','-','-','-','-','-'],
                  ['-','-','-','-','-','-','-','-','-','-'],
                  ['-','-','s','-','-','-','-','s','s','-'],
                  ['-','-','-','s','-','-','-','-','-','-']]
}
var moveCount = 0;
var result = '';

//call applicant code main function 
while (result !== 'Complete'){
    result = robotMoveMain(testMap);
    // call appriate function per possible result
    switch(result){
        case 'North':
            moveNorth(testMap);
            break;
        case 'South':
            moveSouth(testMap);
            break; 
        case 'East':
            moveEast(testMap);
            break;
        case 'West':
            moveWest(testMap);
            break;
        case 'Dig':
            moveDig(testMap);
            break;
        case 'Drop':
            moveDrop(testMap);
            break;   
        case 'Complete':
            //successful completion  
    }
    moveCount += 1;
}


console.log("congratulations your robot took " + moveCount + " moves to complete its mission!")
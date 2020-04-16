
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


function moveToBase(mapObject){ //determins the direction to return to resouce base
    
    for (var i = 0; i < mapObject.resourceMap.length; i++){
        for (var j = 0; j < mapObject.resourceMap[i].length; j++){
            if (mapObject.resourceMap[i][j] === 'r'){
                return getDirectionToDestination(j, i, mapObject.xLocation, mapObject.yLocation);
             
            }
        }
    }
}

function sampleCount(mapObject){ //verifies there are more samples out there to collect
    var count = 0
    for (var i = 0; i < mapObject.resourceMap.length; i++){
        for (var j = 0; j < mapObject.resourceMap[i].length; j++){
            if (mapObject.resourceMap[i][j] === 's'){
                count += 1;
            }
        }
    }
    return count > 1 //returns true if there are any resources left to mine
}

function countMovesToDestination(destXCord, destYCord, startXCord, startYCord){ //counts total number of moves needed to get from start location to destination
    return (Math.abs(destXCord - startXCord) + Math.abs(destYCord - startYCord))
}
function getDirectionToDestination(destXCord, destYCord, startXCord, startYCord){ //gets direction needed to get from start location to destination
    // move along x axis first then y axis 
    if (destXCord - startXCord ===0){
        if (destYCord - startYCord === 0){
            return "none";
        }
        if (destYCord - startYCord > 0){
            return "South";
        }
        if (destYCord - startYCord < 0){
            return "North";
        }
    }
    if (destXCord - startXCord > 0){
        return "East";
    } else if(destXCord - startXCord < 0){
        return "West";
    }
    
}

function moveToSample(mapObject){ //determins the direction to the nearest sample
    var shortestTotalMoves  = 0;
    var shortestLocation = [0,0];
    var currentObjectMoves = 0;

    for (var i = 0; i < mapObject.resourceMap.length; i++){
        for (var j = 0; j < mapObject.resourceMap[i].length; j++){
            if (mapObject.resourceMap[i][j] === 's'){
                currentObjectMoves = countMovesToDestination(j, i, mapObject.xLocation, mapObject.yLocation);
                if (currentObjectMoves < shortestTotalMoves){
                    shortestTotalMoves = currentObjectMoves;
                    shortestLocation = [j,i]

                }

            }
        }
    }
    return getDirectionToDestination(shortestLocation[0], shortestLocation[1], mapObject.xLocation, mapObject.yLocation)


}



function robotMoveMain(mapObject) {
    //check robot current location 
    //if at resource base and sample count > 0  return drop to dump samples if we accidentally end up on R while heading to another sample
    if (mapObject.sampleCount > 0 && mapObject.resourceMap[mapObject.yLocation][mapObject.xLocation] === 'r'){
    return 'Drop'
    }
    //if at sample and we are under max capactity return dig
    if (mapObject.sampleCount < 5 && mapObject.resourceMap[mapObject.yLocation][mapObject.xLocation] === 's'){
    return 'Dig'
    }
    //check robot sample count, if it is 5 move to resource base, if less than 5 scan for nearest resource
    if (mapObject.sampleCount === 5 && mapObject.resourceMap[mapObject.yLocation][mapObject.xLocation] === '*'){
    return moveToBase(mapObject)
    }
    //if we are at an empty space and under capactiy return direction of closest sample
    if (mapObject.sampleCount < 5 && sampleCount(mapObject) && mapObject.resourceMap[mapObject.yLocation][mapObject.xLocation] === '*'){
    return moveToSample(mapObject)
    }
    //if we are at an empty space and at capactiy or if there are no samples remaining return direction of resource base
    if (mapObject.sampleCount < 5 && !sampleCount(mapObject) && mapObject.resourceMap[mapObject.yLocation][mapObject.xLocation] === '*'){
    return moveToBase(mapObject)
    }

    
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
var cell= document.getElementsByClassName("cell");
var cellArr = new Array();
var cellArrH= new Array();

// console.log(cell[0].innerhtml);
colorize();
function colorize(){
    // console.log(cell);
    // console.log("function color");
    for(i=0; i<16; i++){
        var cellContent =cell[i].innerHTML;
        // console.log('in for');
        // console.log(cell[i].innerhtml);
        // console.log(cellContent);
        if(cellContent==""){
            cell[i].style.backgroundColor="#CCC0B3";
        }
        if(cellContent==2){
            cell[i].style.backgroundColor="#EEE4DA";
        }
        if(cellContent==4){
            cell[i].style.backgroundColor="#EDE0C8";
        }
        if(cellContent==8){
            cell[i].style.backgroundColor="#F2B179";
        }
        if(cellContent==16){
            cell[i].style.backgroundColor="#F59563";
        }
        if(cellContent==32){
            cell[i].style.backgroundColor="#F67C5F";
        }
        if(cellContent==64){
            cell[i].style.backgroundColor="#F65E3B";
        }
        if(cellContent==128){
            cell[i].style.backgroundColor="#EDCF72";
        }
        if(cellContent==256){
            cell[i].style.backgroundColor="#EDCC61";
        }
        if(cellContent==512){
            cell[i].style.backgroundColor="#EDC850";
        }
        if(cellContent==1024){
            cell[i].style.backgroundColor="#EDC53F";
        }
        if(cellContent==2048){
            cell[i].style.backgroundColor="#EDC22E";
            alert("you sucessss");
        }
        if(cellContent==4096){
            cell[i].style.backgroundColor="#3E3933";
        }
    }
}
var arrIndex=0;
readCells(cellArr);

function readCells(cellArr){
//    console.log(cell[arrIndex].innerHTML);
    for(var i=0; i<4; i++){
        cellArr[i]=new Array();
        for(var j=0; j<4;j++){
            arrIndex=j;
            if(i==1){
                arrIndex=j+4;
            }
            if(i==2){
                arrIndex=j+8;
            }
            if(i==3){
                arrIndex=j+12;
            }
            cellArr[i][j] = cell[arrIndex].innerHTML;
        }
    }
}
readCellsH(cellArrH);
function readCellsH(cellArrH){
    for(var i=0; i<4; i++){
        cellArrH[i]=new Array();
        for(var j=0; j<4; j++){
            arrIndex=(j*4)+i;
            cellArrH[i][j] = cell[arrIndex].innerHTML;
        }
    }
}
shuffle(2);
writeCells();
readCellsH(cellArrH);
readCells(cellArr);
function checkKey(e) {
    e = e || window.event;
    // console.log(e);
    if (e.keyCode == '38') {
        console.log("Moving UP");
        moveUp();
        adding("hor");
        moveUp();
        check();
        shuffleH(1);
        writeCellsH();
        readCells(cellArr);
    }
    else if (e.keyCode == '40') {
        console.log("Moving Down");
        moveDown();
        addingReverse("hor");
        moveDown();
        check();
        shuffleH(1);
        writeCellsH();
        readCells(cellArr);
    }
    else if (e.keyCode == '37') {
        console.log("Moving Left");
        moveLeft();
        adding("ver");
        moveLeft();
        check();
        shuffle(1);
        writeCells();
        readCellsH(cellArrH);
    }
    else if (e.keyCode == '39') {
        console.log("Moving Right");
        moveRight();
        addingReverse("ver");
        moveRight();
        check();
        shuffle(1);
        writeCells();
        readCellsH(cellArrH);
    }
}

function moveLeft(){
    var oldLength;
    for(i=0; i<4; i++){
        oldLength=cellArr[i].length;
        for(j=3; j>=0;j--)
        {
            if(cellArr[i][j]=='')
            {
            cellArr[i].splice(j,1);
            }       
        }
            while(cellArr[i].length<oldLength)
            {
                cellArr[i].push("");
            }
    }
}

function moveRight(){
    var oldLength;
    for(i=0; i<4; i++){
        oldLength=cellArr[i].length;
        for(j=3; j>=0;j--)
        {
            if(cellArr[i][j]=='')
            {
            cellArr[i].splice(j,1);
            }       
        }
            while(cellArr[i].length<oldLength)
            {
                cellArr[i].unshift("");
            }
    }
}

function moveUp(){
    var oldLength;
    for(i=0; i<4; i++){
        oldLength=cellArrH[i].length;
        for(j=3; j>=0;j--)
        {
            if(cellArrH[i][j]=='')
            {
            cellArrH[i].splice(j,1);
            }       
        }
            while(cellArrH[i].length<oldLength)
            {
                cellArrH[i].push("");
            }
    }
}

function moveDown(){
    var oldLength;
    for(i=0; i<4; i++){
        oldLength=cellArrH[i].length;
        for(j=3; j>=0;j--)
        {4096
            if(cellArrH[i][j]=='')
            {
            cellArrH[i].splice(j,1);
            }       
        }
            while(cellArrH[i].length<oldLength)
            {
                cellArrH[i].unshift("");
            }
    }
}


function writeCells(){
    for(i=0; i<4; i++){
        for(j=0; j<4;j++){
            arrIndex=j;
            if(i==1){
                arrIndex=j+4;
            }
            if(i==2){
                arrIndex=j+8;
            }
            if(i==3){
                arrIndex=j+12;
            }
            cell[arrIndex].innerHTML =cellArr[i][j] ;
        }
    }
    colorize();
}

function writeCellsH(){
    for(i=0; i<4; i++){
        for(j=0; j<4;j++){
            arrIndex=(j*4)+i;
            cell[arrIndex].innerHTML =cellArrH[i][j] ;
        }
    }
    colorize();
}

function adding(side){
    for(i=0; i<4; i++){
        for(j=0; j<4;j++){
            if(cellArr[i][j]==cellArr[i][j+1] && cellArr[i][j]!=''&& side=="ver")
            {
                cellArr[i][j]=parseInt(cellArr[i][j])+parseInt(cellArr[i][j+1]);
                cellArr[i][j+1]='';
            }
            if(cellArrH[i][j]==cellArrH[i][j+1] && cellArrH[i][j]!=''&& side=="hor")
            {
                cellArrH[i][j]=parseInt(cellArrH[i][j])+parseInt(cellArrH[i][j+1]);
                cellArrH[i][j+1]='';
            }
        }
    }
}
function addingReverse(side){
    // debugger;
    for(i=0; i<4; i++){
        for(j=3; j>=0;j--){

            if(cellArr[i][j]==cellArr[i][j-1] && cellArr[i][j]!=''&& side=="ver")
            {
                cellArr[i][j]=parseInt(cellArr[i][j])+parseInt(cellArr[i][j-1]);
                cellArr[i][j-1]='';
            }
            if(cellArrH[i][j]==cellArrH[i][j-1] && cellArrH[i][j]!=''&& side=="hor")
            {
                cellArrH[i][j]=parseInt(cellArrH[i][j])+parseInt(cellArrH[i][j-1]);
                cellArrH[i][j-1]='';
            }
        }
    }
}

function shuffle(numberOfrandom){
    var i=Math.floor(Math.random() * 4); 
    var j=Math.floor(Math.random() * 4);
    console.log(cellArr);
    x=0;
    while(x<numberOfrandom ){
    var i=Math.floor(Math.random() * 4); 
    var j=Math.floor(Math.random() * 4);
    if(cellArr[i][j]==''){
        cellArr[i][j]=( Math.floor(Math.random()*2) + 1)*2;
        x++;
        }
    }
}

function shuffleH(numberOfrandom){
    var i=Math.floor(Math.random() * 4); 
    var j=Math.floor(Math.random() * 4);
    console.log(cellArrH);
    x=0;
    while(x<numberOfrandom ){
    var i=Math.floor(Math.random() * 4); 
    var j=Math.floor(Math.random() * 4);
    if(cellArrH[i][j]==''){
        cellArrH[i][j]=( Math.floor(Math.random()*2) + 1)*2;
        x++;
        }
    }
}

function check(){
    x=0;
    for(i=0; i<16; i++){
        if(cell[i].innerHTML !=''){
            x++;
            console.log(x);
        }
    }
    if(x==16){
        alert("you faild");
    }
}

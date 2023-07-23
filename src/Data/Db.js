
var retArr=[]
var searchDataArr=[]
var retString = localStorage.getItem("todoarr");
retArr = JSON.parse(retString);

if(retArr==null){
    retArr=[]
}



var retString = localStorage.getItem("searcharr");
searchDataArr = JSON.parse(retString);
if(searchDataArr==null){
    searchDataArr=[]
}

export const getTodoData=()=>{
    return retArr;
}

export const setDbData = (Arr) => {
    console.log("call in Db.js");
    let string = JSON.stringify(Arr);
    localStorage.setItem("todoarr", string);
}


export const setDbSearchResultsData = (Arr) => {
    let string = JSON.stringify(Arr);
    localStorage.setItem("searcharr",string);
}



var retArr=[]
var searchDataArr=[]
var retString = localStorage.getItem("todoarr");

if (retString !== null) {
  try {
    retArr = JSON.parse(retString);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
}

if(retArr==null){
    retArr=[]
}



var retString = localStorage.getItem("searcharr");
searchDataArr = JSON.parse(retString);
if(searchDataArr==null){
    searchDataArr=[]
}

export const getSearchData=()=>{
    return searchDataArr;
}

export const getTodoData=()=>{
    return retArr;
}

export const getTodoDataByIndex=(index)=>{
    return retArr[index];

}

export const setDbData = (Arr) => {
    let string = JSON.stringify(Arr);
    localStorage.setItem("todoarr", string);
}


export const setDbSearchResultsData = (Arr) => {
    let string = JSON.stringify(Arr);
    localStorage.setItem("searcharr",string);
}


function pies(arr, startString, endString){
    let start = arr.indexOf(startString);
    let end = arr.indexOf(endString);
    let result = arr.slice(start, end+1);
    return result;
}
console.log(pies(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));
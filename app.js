"use strict";
/*Работа с типами */
const data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 3, name: 'c' },
];
function group(array, key) {
    return array.reduce((acc, item) => {
        const itemKey = item[key];
        let curEl = acc[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        }
        else {
            curEl = [item];
        }
        acc[itemKey] = curEl;
        return acc;
    }, {});
}
const res = group(data, 'group');
console.log(res);
// function GroupBy<T extends Data[],K extends keyof Data>(obj:T, key: K){
//     if(key == 'name'){
//         return obj.sort((a,b) => {
//             if (a.name < b.name)
//                 return -1;
//             if ( a.name > b.name)
//                 return 1;
//             return 0;})
//     }else if(key == 'group'){
//             console.log('1:',obj.filter(x =>x.group == 1));
//             console.log('2:',obj.filter(x =>x.group == 3));
//         }
// }
// console.log(GroupBy(data,'group'));
// // console.log(GroupBy(data,'name'));
/** */ 

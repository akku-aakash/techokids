// import update from "immutability-helper";
// import { difference, includes } from "lodash";
// import { staticFilterMetaData } from "./setupHelper";

// export const updateNestedData = (
//   state: any,
//   id: string,
//   value: any,
//   levels?: string[],
//   commandPassed?: string
// ) => {
//   let command = commandPassed ? commandPassed : "$set";
//   let finalObj;
//   try {
//     finalObj = levels
//       ? levels?.reduceRight((accumulator, item, index, arr) => {
//           let updateCommand = { [id]: { [command]: value } };
//           let newAccumulator: any = {};
//           if (index === arr.length - 1) {
//             newAccumulator[item] = { ...updateCommand };
//           } else {
//             newAccumulator[item] = { ...accumulator };
//           }

//           return newAccumulator;
//         }, {})
//       : { [id]: { [command]: value } };
//   } catch (err) {
//     debugger;
//     throw err;
//   }

//   return update(state, { ...finalObj });
// };

// export const nthElem = (state: any, levels: string[]) => {
//   return levels.reduce((acc, value) => {
//     return acc[value];
//   }, state);
// };

// var removeByAttr = function (arr: any[], attr: string, value: string) {
//   var i = arr.length;
//   while (i--) {
//     if (
//       arr[i] &&
//       arr[i].hasOwnProperty(attr) &&
//       arguments.length > 2 &&
//       arr[i][attr] === value
//     ) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// };

// export const checkIfExisting = ( arrayToCheck: any[], arrayToBeChecked: any[] , arraytoBeRemoved?:any[]) => {
//   const filterStatic = [...staticFilterMetaData];
//   let arrayToRemove =  arraytoBeRemoved === undefined ? filterStatic : [...arraytoBeRemoved];

//   arrayToCheck.forEach((value: any) => {
//     if (includes(arrayToBeChecked, value.id)) {
//       removeByAttr(arrayToRemove, "id", value.id);
//     }
//   });

//   return arrayToRemove;
// };

// export function differenceInArray<T extends number>(
//   array1: T[],
//   array2: T[]
// ): number {
//   let arrayToBeComp, arrayCompared;

//   if (array1.length > array2.length) {
//     arrayToBeComp = array1;
//     arrayCompared = array2;
//   } else {
//     arrayToBeComp = array2;
//     arrayCompared = array1;
//   }

//   return difference(arrayToBeComp, arrayCompared)[0];
// }


// export const flatNestedObjects = (array:any[])=>{
//   var result:any[] = [];
//   array.forEach(function (a) {
//       result.push(a);
//       if (Array.isArray(a.items)) {
//           result = result.concat(flatNestedObjects(a.items));
//       }
//   });
//   return result;
// }


let a = [0, 1, 2, 3, 4];
let c = [4, 5, 6, 7, 8];
let b = {
  firstName: 'Fakhri',
  midName: 'Ridho',
  lastName: 'Dhiyamatr',
};

// for (let i = 0; i < a.length; i++) {
//   console.log (`index ke ${i} = ${a[i]}`);
// }
function MapArray (array) {
  array.map (function (angka, urut) {
    console.log (`index ke ${urut} = ${angka}`);
  });
}
// function forEachArray (array) {
//   array.forEach (function (angka, urut) {
//     console.log (`index ke ${urut} = ${angka}`);
//   });
// }
const forEachArray = (array) => {
  array.forEach (function (angka, urut) {
    console.log (`index ke ${urut} = ${angka}`);
  });
}
MapArray (a);
forEachArray (c);
// a.map (function (angka, urut) {
//   console.log (`index ke ${urut} = ${angka}`);
// });

// a.forEach(function (angka, urut) {
//   console.log (`index ke ${urut} = ${angka}`);
// })

// console.log (`nama = ${b.firstName} ${b.midName} ${b.lastName}`);

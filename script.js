// 1-challange
// const nums = [1,2,3,4,5,6,7,8,9];
// // const findNum = function (num) {
// //     num = nums.includes(7) ? alert("CR7") : alert("Wrong number");
// //     return num;
// // } // Function expression
// const findNum2 = (nums) => nums.includes(7)? alert("CR7") : alert("Wrong number"); // Arrow function
// console.log(findNum2(nums));

// 2-challange
// const nums = [1,2,3,4,5,6,7];
// const nums2 = [1,4,5,2];

// // const findNum = function (nums) {
// //     return nums.slice(0, 3);
// // }  // Function expression
// const findNum = (nums) => nums.splice(2,3); // Arrow function 
// console.log(findNum(nums));
// console.log(findNum(nums2));

// 3-challenge
// const findIndex = (nums, num) => nums.indexOf(num); // Arraw function 
// console.log(findIndex([1,2,3,4,5,6],7));

//4-challenge
// const numbers = [1,2,3,4,5,6,7];
// numbers.forEach((num, index, array) =>{
//     num*2;
// })
// const number = numbers.forEach((num, index, array) =>{
//     return num * 2;
// })
// console.log(number);


// let data = ["home", "blog", "contact", "about"];

// let input = document.createElement("input");
// document.body.appendChild(input);

// for (const info of data) {
//     let p = document.createElement("p");
//     p.innerHTML = info;
//     document.body.appendChild(p);
// }

// let cards = document.querySelectorAll('.box')
    
// function liveSearch() {
//     let search_query = document.getElementById("searchbox").value;
    
//     //Use innerText if all contents are visible
//     //Use textContent for including hidden elements
//     for (var i = 0; i < cards.length; i++) {
//         if(cards[i].textContent.toLowerCase()
//                 .includes(search_query.toLowerCase())) {
//             cards[i].classList.remove("is-hidden");
//         } else {
//             cards[i].classList.add("is-hidden");
//         }
//     }
// }

// //A little delay
// let typingTimer;               
// let typeInterval = 500;  
// let searchInput = document.getElementById('searchbox');

// searchInput.addEventListener('keyup', () => {
//     clearTimeout(typingTimer);
//     typingTimer = setTimeout(liveSearch, typeInterval);
// });

const nums = [1,2,3,4,5,6,7,8,9];
const ifYes = [];
const ifNo = [];

const findNum = function (array, num) {
    while (array.indexOf(num)) {
        ifYes.push(num);
    }
}

findNum(nums, 4);
console.log(ifYes);
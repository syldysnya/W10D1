class DOMNodeCollection {
    constructor(arr) {
        this.arr = arr
    }


    html(str) {
        if (typeof str ==='undefined'){
            return this.arr[0].innerHTML
        }else {
            this.arr.forEach(ele => {
               ele.innerHTML = str
            })
        }
    };

    empty() {
        this.arr.forEach(ele => {
            ele.innerHTML = "";
        })
    };

    append(arg) {
        
    }

//     // The element into which appending will be done
// var element = document.querySelector("#main-container");

// // The element to be appended
// var child = document.createElement("DIV");
// child.innerHTML = 'Child Container';

// // append
// element.appendChild(child);
// }

module.exports = DOMNodeCollection;
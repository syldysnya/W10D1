class DOMNodeCollection {
    constructor(arr) {
        this.arr = arr
    }


    html(str) {
        if (typeof str ==='undefined') {
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

    append(...args) { // ul.append(<p style="background-color: red;">This is a p element.</p>)
        this.arr.forEach(function(outerEle) { // <li>List 1</li> -- outerEle
            args.forEach(function(innerEle) {    // <a></a> -- innerEle

                if (innerEle instanceof HTMLElement) { // <p style="background-color: red;">This is a p element.</p> -- innerEle
                    outerEle.innerHTML += innerEle.outerHTML;
                } else if (innerEle instanceof DOMNodeCollection) {  // DOMNodeCollection {arr: Array(2)} -- innerEle
                    innerEle.arr.forEach(function(innerEle) { // [li, li] -- innerEle.arr
                        outerEle.innerHTML += innerEle.outerHTML;
                    })
                } else if (typeof innerEle === 'string') { // 'a' -- innerEle
                    outerEle.innerHTML += innerEle;
                }
            })
            
        })
    }


    children(){
        
    }

    

}



module.exports = DOMNodeCollection;
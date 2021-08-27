// console.log("0 - iniciou")

// window.onload = function() {
//     console.log("1 - load")
    
//     setTimeout(function() {
//         console.log("2 - timeout")
        
//         function isInViewport(element) {
//             console.log("3 - function")
//             const rect = element.getBoundingClientRect();
//             return (
//                 rect.top >= 0 &&
//                 rect.left >= 0 &&
//                 rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//                 rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//             );
//         }
        
//         let sections = document.querySelectorAll("section");
        
//         sections.forEach(section => {
//             if (isInViewport(section)) {
//                 section.classList.add("in-viewport");
//             }
//         });
            
//     }, 1000)
        
//     console.log("4 - final")
// }
// console.log("5 - glugs")


const snippet = function() {

    // window.onload = function() {
        console.log("1 - load")
    
    setTimeout(function() {
        console.log("2 - timeout")
        
        function isInViewport(element) {
            console.log("3 - function")
            // window.addEventListener('scroll', function() {
            //     var position = element.getBoundingClientRect();
            
            //     // checking whether fully visible
            //     if(position.top >= 0 && position.bottom <= window.innerHeight) {
            //         console.log('Element is fully visible in screen');                
            //         element.classList.add("in-viewport");
            //     }
            
            //     // checking for partial visibility
            //     if(position.top < window.innerHeight && position.bottom >= 0) {
            //         console.log('Element is partially visible in screen');
            //     }
            // });

            var observer = new IntersectionObserver(function(entries) {
                // isIntersecting is true when element and viewport are overlapping
                // isIntersecting is false when element and viewport don't overlap
                if(entries[0].isIntersecting === true)
                    console.log('Element has just become visible in screen');
            }, { threshold: [0] });
            
            observer.observe(element);
        }
        
        let sections = document.querySelectorAll("section");
        console.log(sections);
        
        sections.forEach(section => {
            console.log(section);
            isInViewport(section)
        });
            
    }, 3000)
        
//     console.log("4 - final")
    // }
}
// console.log("5 - final")

export default snippet
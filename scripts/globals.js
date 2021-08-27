const snippet = function() {
    
    setTimeout(function() {
                
        let sections = document.querySelectorAll("section");
        
        sections.forEach(section => {
            var observer = new IntersectionObserver(function(entries) {
                if(entries[0].isIntersecting === true)         
                section.classList.add("in-viewport");
            }, { threshold: [0.3] });
            
            observer.observe(section);
        });
            
    }, 1000)

}

export default snippet
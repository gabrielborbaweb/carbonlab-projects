const snippet = function() {
    
    setTimeout(function() {
        
        // Animations

        document.querySelectorAll("section").forEach(section => {
            var observer = new IntersectionObserver(function(entries) {
                if(entries[0].isIntersecting === true) {
                    section.classList.add("in-viewport");
                }
            }, { threshold: [0.2] });
            
            observer.observe(section);
        });

        // End Animations
        
    }, 1000);

}

export default snippet
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

        // Get In Touch

        document.querySelectorAll(".getintouch").forEach(btn => {
            btn.addEventListener(onclick, function() {
                document.querySelector("#form").classList.add("show");
            });
        });
        document.querySelector(".close").addEventListener(onclick, function() {
            document.querySelector("#form").classList.remove("show");
        });

        // End Get In Touch
        
    }, 1000);

}

export default snippet
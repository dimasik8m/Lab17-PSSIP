document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const percentScroll = (scrollPosition / maxScroll);
        
        const startColor = [255, 255, 255];
        const endColor = [173, 216, 230]; 

        const currentColor = startColor.map((start, index) => {
            const end = endColor[index];
            return Math.round(start + (end - start) * percentScroll);
        });
        
        const backgroundColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
        document.body.style.backgroundColor = backgroundColor;
    });
});

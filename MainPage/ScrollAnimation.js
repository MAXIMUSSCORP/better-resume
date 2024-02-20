document.addEventListener('DOMContentLoaded', (event) => {
    var animData = {
        container: document.getElementById('animated'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '../Wave.json'
    };

    var anim = lottie.loadAnimation(animData);

    function updateAnimation() {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        var documentHeight = document.documentElement.scrollHeight;

        // Calculate the maximum amount of pixels that can be scrolled
        var maxScroll = documentHeight - windowHeight;

        // Calculate the current scroll progress as a fraction between 0 and 1
        var scrollFraction = scrollPosition / maxScroll;

        // Calculate the frame to go to based on the current scroll position
        var maxFrames = anim.totalFrames;
        var frameToGo = Math.floor(maxFrames * scrollFraction);

        // Go to the calculated frame
        anim.goToAndStop(frameToGo, true);
    }

    // Update the animation on scroll
    window.addEventListener('scroll', updateAnimation);

    // Also update the animation on resize, in case the scrollable height changes
    window.addEventListener('resize', updateAnimation);
});

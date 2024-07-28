let divisor = document.getElementById('divisor'),
    handle = document.getElementById('handle'),
    slider = document.getElementById('slider');

if (divisor) {
    function moveDivisor() {
        handle.style.left = slider.value + '%';
        divisor.style.width = slider.value + '%';
    }

    window.onload = function () {
        moveDivisor();
    };
}

/*jshint esversion: 6 */

function Store() {
    const mobileScreen = window.height > 767; // tablet break-point
    if (!mobileScreen) {
        this.height = document.getElementById('store-section').offsetHeight - 100;
        this.filterWidth = document.getElementById('filters-container').offsetWidth - 15;
    }
}

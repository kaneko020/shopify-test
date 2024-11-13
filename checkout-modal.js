console.log('checkout-modal.js loaded');

document.addEventListener('DOMContentLoaded', function() {
    // チェックアウトボタンの要素を監視する
    const payButton = document.querySelector('.checkout');

    if (payButton) {
        payButton.addEventListener('click', function(event) {
            console.log('checkout click');
        });
    }
});

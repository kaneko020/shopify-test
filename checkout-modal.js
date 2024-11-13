const modalHtml = `
<div id="myModal" style="display:none;">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>ご確認ください</h2>
        <p>この内容でお間違いありませんか？</p>
    </div>
</div>
`;

document.body.innerHTML += modalHtml;

console.log('checkout-modal.js loaded');

document.addEventListener('DOMContentLoaded', function() {
    // チェックアウトボタンの要素を監視する
    const payButton = document.querySelector('.checkout');

    if (payButton) {
        console.log('checkout');
        payButton.addEventListener('click', function(event) {
            event.preventDefault(); // デフォルトのアクションをキャンセル

            // モーダルを表示
            const modal = document.getElementById('myModal');
            modal.style.display = "block";

            // 閉じるボタンの処理
            const closeButton = modal.querySelector('.close');
            closeButton.onclick = function() {
                modal.style.display = "none";
            }

            // モーダルの外側をクリックしたときにモーダルを閉じる処理
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        });
    }
});

// ダミーデータを送信するためのURL
const url = 'https://jsonplaceholder.typicode.com/posts';
// イベント処理の対象となるボタン
const button = document.getElementById('ajax-btn');

// ボタンクリック時にイベント処理を実行する
button.addEventListener('click', () => {
  // 送信するダミーデータ
    const dummyDate = { name: '侍太郎', age: 30 };

  // ダミーサーバーにAjaxリクエストを送信する
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dummyDate) // JSON形式に変換
  })
    // サーバーからAjaxレスポンスを受け取ったときの処理
    .then((response) => response.json()) // JSON形式のデータに変換
    .then((date) => {
      // サーバーから受け取ったダミーデータを見やすい形にして表示
      console.log('サーバーからの応答: \n' + JSON.stringify(date, null, 2) );
    });
});



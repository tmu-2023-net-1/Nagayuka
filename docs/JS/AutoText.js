// 追加する要素のリスト
var elements = [
  " ",
  "ひどい",
  "もう半年以上マリトッツォを食べていない。",
  "みんな新しいスイーツばっか。",
  "私はこんなにもマリトッツォを愛しているのに...",
  "どうしてわかってくれないの？",
  "許せない...",
  "食べたい.....",
  "食べさせろ......",
  "マリtッツo",
  "マitッtォOdfijiedhnow",
  "Mxiッoaivauhfiwjdfuiebwnd...",
  "�䂾����̂悤�I�𔭌䂻�����̐�̒��Ȃ����I�𕜂�����",
];

var index = 0;
var contentElement = document.getElementById("content");

// 1秒ごとに要素を追加する関数
function addElement() {
  if (index < elements.length) {
    contentElement.innerHTML += "<br><span>" + elements[index] + "</span>";
    index++;
    document.body.scrollTop = document.documentElement.scrollTop =
      document.body.scrollHeight; // サイト全体を最下部にスクロール
    setTimeout(addElement, 800);
  }
}

// 最初の要素追加の開始
addElement();

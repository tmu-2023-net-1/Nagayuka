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
  } else {
    // 全ての要素が追加された後、追加した要素の表示が終わったら以下の処理を行う
    setTimeout(startTyping, 1); // 1ミリ秒後にテキストの表示を開始
  }
}

// 最初の要素追加の開始
addElement();

function startTyping() {
  $(document).ready(function () {
    var words = [
      "ひどい...ひどいひどい",
      "もう半年以上マリトッツォを食べていない。",
      "みんな新しいスイーツばっか。",
      "私はこんなにもマリトッツォを愛しているのに...",
      "��ނ���������Ă�������̂��ꍇ��������������Ȃ��Ă����̂ƁI��̌���Ώ�ꂽ�̂͂Ȃ��������ɂ���������ꍇ�͂��̎��̍��߂���Ƃ����I��̉��̂͂Ȃ",
      "どうしてわかってくれないの？",
      "許せない...",
      "食べたい.....食べさせろ......食べsセr",
      "ミンナ嫌イ許セナイ",
      "マリtッツo",
      "マitッtォOdfijiedhnow",
      "Mxiッoaivauhfiwjdfuiebwnd...",
      "....",
      ".......",
      "............................�䂾����̂悤�I�𔭌䂻�����̐�̒��Ȃ����I�𕜂���",

      "��ނ���������Ă�������̂��Ȃ��������ɂ���������ꍇ�͂��̎��̍��߂���Ƃ����I��̉��̂͂Ȃ�����������ɂ��郁�I�Ȃ����Ă��܂���I ����̂��邱�Ƃ̓����I�𔭌��I",
      "fjdsfodsijfpsdjfiohsdfyvgaulofijeauligfhisahdvsaiocjifyrfioeadsjiz",
    ];

    // wordsを3倍に増やす
    words = words.concat(words).concat(words);

    // wordsをランダムに並び替える
    words = shuffleArray(words);

    var container = $("#text-container");
    var currentIndex = 0;

    // 配列をランダムに並び替える関数
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

    // 文字を表示する間隔（ミリ秒）
    var typingInterval = 1;

    function typeText() {
      if (currentIndex >= words.length) {
        return; // 全ての文字が表示されたら終了
      }

      var word = words[currentIndex];
      var charIndex = 0;
      var typingInterval = setInterval(function () {
        if (charIndex < word.length) {
          var char = word.charAt(charIndex);
          container.append(char);
          charIndex++;
          document.body.scrollTop = document.documentElement.scrollTop =
            document.body.scrollHeight; // サイト全体を最下部にスクロール
        } else {
          clearInterval(typingInterval);
          currentIndex++;
          setTimeout(typeText, typingInterval); // 次の文字を表示するまでの待ち時間（ミリ秒）
        }
      }, typingInterval); // 1文字あたりの表示間隔（ミリ秒）
    }

    // 実行
    typeText();
  });
}

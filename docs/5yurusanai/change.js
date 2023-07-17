window.onload = function () {
  var elements = ["loading", "second", "third"];
  var currentIndex = 0;

  // クラスを切り替える関数
  function switchClasses() {
    var currentElement = document.getElementById(elements[currentIndex]);

    if (currentIndex === elements.length - 1) {
      // 最後の要素の場合、リダイレクトする
      window.location.href = "../6usodayo/index.html";
    } else {
      currentElement.classList.remove(elements[currentIndex]);
      currentElement.style.display = "none";

      currentIndex++;
      var nextElement = document.getElementById(elements[currentIndex]);
      nextElement.classList.add(elements[currentIndex]);
      nextElement.style.display = "block";

      if (elements[currentIndex] === "loading") {
        setTimeout(switchClasses, 2000);
      } else {
        setTimeout(switchClasses, 3000);
      }
    }
  }

  setTimeout(switchClasses, 3000);

  // ボタンをクリックした際の処理
  var button = document.querySelector("#second button");
  button.addEventListener("click", function () {
    var secondElement = document.getElementById("second");
    var thirdElement = document.getElementById("third");

    secondElement.style.display = "none";
    thirdElement.style.display = "block";
  });
};

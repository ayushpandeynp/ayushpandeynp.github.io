const beginButton = $("#begin");

const interacive_container = $("#interactive_container");
const candles_horizontal = $("#candles_horizontal");

let changes = {
  42: "tariq.html",
  48: "niraj.html",
  52: "arman.html",
  59: "one.html",
  66: "basement.html",
  78: "kitchen.html",
};

const changeIframeSRC = (src) => {
  $("iframe").attr("src", "pages/" + src);
};

const hideIframe = () => {
  $("#iframe_container").hide();
};

const showIframe = () => {
  $("#iframe_container").css("display", "flex");
};

const timeListeners = () => {
  // IFRAME CHANGES
  for (const key in changes) {
    setTimeout(() => {
      changeIframeSRC(changes[key]);
    }, key * 1000);
  }

  setTimeout(() => {
    hideIframe();
    interacive_container.show();
  }, 90000);

  setTimeout(() => {
    const audio = new Audio("sounds/12Candles_2.mp3");
    audio.play();
  }, 91000);
};

beginButton.click(() => {
  $(".candles_bg").hide();
  $("#iframe_container").css("display", "flex");

  $("body").addClass("istanbul");

  const audio = new Audio("sounds/12Candles_1.mp3");
  audio.play();

  timeListeners();
});

$("#sidebar img").draggable({
  helper: "clone",
  revert: "invalid",
});

$("#interactive").droppable({
  accept: "#sidebar img",
  drop: function (event, ui) {
    const imgSrc = ui.draggable.attr("src");
    const filename = imgSrc.split("/").pop().split(".")[0];
    $(`#item_${filename}`).show();

    if ($("#canvas img:visible").length === 6) {
      $("#continue").css("display", "flex");
      $("#continue").click(() => {
        $("#interactive_container").hide();

        const audio = new Audio("sounds/12Candles_3.mp3");
        audio.play();

        candles_horizontal.css("display", "flex");
        changeIframeSRC("ritual.html");
        showIframe();

        time = 0;
        changes = {
          11: "ritual_tariq.html",
          17: "ritual.html",
          20: "ritual_tariq.html",
          31: "mantra.html",
          67: "ritual_tariq.html",
          72: "ritual.html",
          79: "ritual_niraj.html",
          83: "ritual_tariq.html",
          86: "ritual_arman.html",
          92: "ritual.html",
          109: "ritual_tariq.html",
          120: "tariq_blood.html",
          143: "breeze.html",
          157: "tariq_blood.html",
          175: "niraj_screaming.html",
          181: "tariq_blood.html",
          192: "arman_scared.html",
          200: "istanbul.html",
          240: "credits.html"
        };
        for (const key in changes) {
          setTimeout(() => {
            changeIframeSRC(changes[key]);
          }, key * 1000);
        }

        setTimeout(() => {
          $("#candles_horizontal img").each(function (index) {
            const candle = $(this);
            setTimeout(() => {
              candle.fadeOut(500, function () {
                $(this).attr("src", "img/unlit-candle.png").fadeIn(500);
              });
            }, index * 200);
          });
        }, 145000);
      });
    }
  },
});

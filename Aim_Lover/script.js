/* =========================================
   LẤY ELEMENT
========================================= */


const openButton =
    document.getElementById("openButton");

const music = 
    document.getElementById("bgMusic"); music.volume = 0.5;

const envelope =
    document.querySelector(".envelope");

const envelopeScreen =
    document.getElementById("envelope-screen");

const letterScreen =
    document.getElementById("letter-screen");

const lines =
    document.querySelectorAll(".line");

const heartButton =
    document.getElementById("heartButton");

const finalMessage =
    document.getElementById("finalMessage");

const heartsContainer =
    document.getElementById("hearts-container");


/* =========================================
   NÚT MỞ THƯ
========================================= */

openButton.addEventListener(
    "click",
    function () {  music.play().catch(function(error) {
        console.log("Không thể phát nhạc:", error);
    });

        /*
         * Thêm class "open"
         * vào phong thư.
         */

        envelope.classList.add("open"); 


        openButton.innerHTML =
            "Đang mở thư... 💗";


        /*
         * Chờ 1.8 giây
         * rồi chuyển màn hình.
         */

        setTimeout(
            function () {

                envelopeScreen.classList.add(
                    "hidden"
                );

                letterScreen.classList.remove(
                    "hidden"
                );


                showMessages();

                startHeartRain();

            },
            1800
        );

    }
);


/* =========================================
   HIỆN TỪNG LỜI CHÚC
========================================= */

function showMessages() {

    lines.forEach(
        function (line, index) {

            /*
             * Mỗi dòng cách nhau 0.9 giây.
             */

            setTimeout(
                function () {

                    line.classList.add(
                        "show"
                    );

                },
                index * 900
            );

        }
    );

}


/* =========================================
   TẠO TRÁI TIM
========================================= */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.classList.add(
        "floating-heart"
    );


    /*
     * Những loại trái tim
     */

    const heartTypes = [

        "♥",
        "♡",
        "❤",
        "💕",
        "💗",
        "💖",
        "💘"

    ];


    /*
     * Chọn ngẫu nhiên
     */

    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random()
                * heartTypes.length
            )
        ];


    /*
     * Vị trí ngang ngẫu nhiên
     */

    heart.style.left =
        Math.random() * 100 + "vw";


    /*
     * Kích thước ngẫu nhiên
     */

    const size =
        Math.random() * 20 + 12;

    heart.style.fontSize =
        size + "px";


    /*
     * Tốc độ bay
     */

    const duration =
        Math.random() * 5 + 5;

    heart.style.animationDuration =
        duration + "s";


    /*
     * Độ lệch trái phải
     */

    const moveX =
        Math.random() * 200 - 100;

    heart.style.setProperty(
        "--moveX",
        moveX + "px"
    );


    heartsContainer.appendChild(
        heart
    );


    /*
     * Xóa trái tim
     * sau khi animation kết thúc.
     */

    setTimeout(
        function () {

            heart.remove();

        },
        duration * 1000
    );

}


/* =========================================
   MƯA TRÁI TIM
========================================= */

function startHeartRain() {

    setInterval(
        function () {

            createHeart();

        },
        350
    );

}


/* =========================================
   NÚT CUỐI
========================================= */

heartButton.addEventListener(
    "click",
    function () {

        finalMessage.classList.add(
            "show"
        );


        /*
         * Tạo 30 trái tim liên tục
         */

        for (
            let i = 0;
            i < 30;
            i++
        ) {

            setTimeout(
                function () {

                    createHeart();

                },
                i * 100
            );

        }


        heartButton.innerHTML =
            "Anh là một người rất đặc biệt với em. ❤️";


        heartButton.disabled = true;

        heartButton.style.opacity =
            "0.7";

    }
);

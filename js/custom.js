$(document).ready(function () {

    $("#design-pic").click(function () {
        $(this).hide();
        $("#design-text").toggle()
            .show();
    })

    $("#design-text").click(function () {
        $(this).hide();
        $("#design-pic").toggle().show();
    })

    $("#dev-pic").click(function () {
        $(this).hide();
        $("#dev-text").toggle().show();
    })

    $("#dev-text").click(function () {
        $(this).hide();
        $("#dev-pic").toggle().show();
    })

    $("#prod-pic").click(function () {
        $(this).hide();
        $("#prod-text").toggle().show();
    })

    $("#prod-text").click(function () {
        $(this).hide();
        $("#prod-pic").toggle().show();

    })

    $(".porfolio-pic1").hover(
        function () {
            $(this).css({ cursor: "pointer" })
            $("#work-one").show()
                .css({ color: "white", "font-size": "122%" })
            if ($(window).width() < 822) {
                $("#work-one").css({ color: "white", "font-size": "50%", width: "63%", "border-width": "2px" })
            }

        },
        function () {
            $("#work-one").hide()

        }
    )

    $(".porfolio-pic2").hover(
        function () {
            $(this).css({ cursor: "pointer" })
            $("#work-2").show()
                .css({ color: "white", "font-size": "122%" })
            if ($(window).width() < 822) {
                $("#work-2").css({ color: "white", "font-size": "50%", width: "63%", "border-width": "2px" })
            }
        },
        function () {
            $("#work-2").hide()
        }
    )

    $(".porfolio-pic3").hover(
        function () {
            $(this).css({ cursor: "pointer" })
            $("#work-3").show()
                .css({ color: "white", "font-size": "122%" })
            if ($(window).width() < 822) {
                $("#work-3").css({ color: "white", "font-size": "50%", width: "63%", "border-width": "2px" })
            }
        },
        function () {
            $("#work-3").hide()
        }
    )

    $(".porfolio-pic4").hover(
        function () {
            $(this).css({ cursor: "pointer" })
            $("#work-4").show()
                .css({ color: "white", "font-size": "122%" })
            if ($(window).width() < 822) {
                $("#work-4").css({ color: "white", "font-size": "50%", width: "63%", "border-width": "2px" })
            }
        },
        function () {
            $("#work-4").hide()
        }
    )

    $(".porfolio-pic5").hover(
        function () {
            $(this).css({ cursor: "pointer" })
            $("#work-5").show()
                .css({ color: "white", "font-size": "122%" })
            if ($(window).width() < 822) {
                $("#work-5").css({ color: "white", "font-size": "50%", width: "63%", "border-width": "2px" })
            }
        },
        function () {
            $("#work-5").hide()
        }
    )

    $(".porfolio-pic6").hover(
        function () {
            $(this).css({ cursor: "pointer" })
            $("#work-6").show()
                .css({ color: "white", "font-size": "122%" })
            if ($(window).width() < 822) {
                $("#work-6").css({ color: "white", "font-size": "45%", width: "63%", "border-width": "2px" })
            }
        },
        function () {
            $("#work-6").hide()
        }
    )

    $(".porfolio-pic7").hover(
        function () {
            $(this).css({ cursor: "pointer" })
            $("#work-7").show()
                .css({ color: "white", "font-size": "122%" })
            if ($(window).width() < 822) {
                $("#work-7").css({ color: "white", "font-size": "46%", width: "63%", "border-width": "2px" })
            }
        },
        function () {
            $("#work-7").hide()
        }
    )

    $(".porfolio-pic8").hover(
        function () {
            $(this).css({ cursor: "pointer" })
            $("#work-8").show().css({ color: "white", "font-size": "122%" })
            if ($(window).width() < 822) {
                $("#work-8").css({ color: "white", "font-size": "45%", width: "63%", "border-width": "2px" })
            }
        },
        function () {
            $("#work-8").hide()
        }
    )
    $("#contact-form").submit(
        function () {
            alert("Your message was received and we will respond in no time. Peace!");
        }
    )

    $('#footer').html(new Date().getFullYear());
})
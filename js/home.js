function showUXUI() {
    $(document).ready(function () {

        if ($("#uxui").hasClass("hidden")) {
            $("#uxui").removeClass("hidden").addClass("visible");
        }
        if ($("#vrar").hasClass("visible")) {
            $("#vrar").removeClass("visible").addClass("hidden");
        }
        $("#uxuiButton").addClass("hovered")
        $("#uxuih2").addClass("hovered")
        $("#vrarButton").removeClass("hovered");
        $("#vrarh2").removeClass("hovered");

    });
}

function showVRAR() {
    $(document).ready(function () {
        if ($("#vrar").hasClass("hidden")) {
            $("#vrar").removeClass("hidden").addClass("visible");
        }
        if ($("#uxui").hasClass("visible")) {
            $("#uxui").removeClass("visible").addClass("hidden");
        }
            $("#vrarButton").addClass("hovered");
            $("#vrarh2").addClass("hovered");
            $("#uxuiButton").removeClass("hovered");
            $("#uxuih2").removeClass("hovered");
    });
}
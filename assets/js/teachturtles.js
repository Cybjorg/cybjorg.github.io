$("#modal1").on('hidden.bs.modal', function (e) {
    $("#modal1 iframe").attr("src", $("#modal1 iframe").attr("src"));
});

$("#modal2").on('hidden.bs.modal', function (e) {
    $("#modal2 iframe").attr("src", $("#modal2 iframe").attr("src"));
});
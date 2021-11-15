$(document).ready(function() {
    $("#options a").click(function(e) {
        e.preventDefault();
        var href = $( this ).attr('href');
        $("#conteudocentral").load(href + "#conteudocentral");
    });
});
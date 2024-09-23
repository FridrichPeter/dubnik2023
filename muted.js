$(document).ready(function() {
    $('#audio-control').click(function(){
        if( $("#myVideo").prop('muted') ) {
            $("#myVideo").prop('muted', false);
            $(this).text('Vypni ma');
        } else {
            $("#myVideo").prop('muted', true);
            $(this).text('Unmute');
        }
    });
});

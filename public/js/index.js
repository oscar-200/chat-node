jQuery(($)=>{
    const socket = io.connect();
    const $messajeForm = $('#btnEnviar');
    let $message = $('#message');
    let $chat = $('#divMensajes');

    

    $messajeForm.click((event)=>{
        event.preventDefault();
        if($message.val() !== ''){
            socket.emit('mandar-mensaje', $message.val());
        }
        $message.val('');
    });

    socket.on('nuevo-mensaje', (data)=>{
        $chat.append(`
        <p class="message ">${data.msg}</p>`);
        $chat.scrollTop($chat.prop('scrollHeight'));
    });

});
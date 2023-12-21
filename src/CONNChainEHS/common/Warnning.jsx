import swal from 'sweetalert';

export default function Warning(text, showConfirm) {
    if (showConfirm) {
        return swal({
            title: "Warning",
            text: text,
            icon: "warning",
            dangerMode: true,
            buttons: {
                Btn: false,
                cancel: {
                    text: "取消",
                    visible: true
                },
                confirm: {
                    text: "確定",
                    visible: true
                },
            }
        })
    }
    return swal({
        title: "Error",
        text: text,
        icon: "warning",
        dangerMode: true,
    })

}
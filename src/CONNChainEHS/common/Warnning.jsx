import swal from 'sweetalert';

export default function Warning(text){
    return swal({
        title: "Error",
        text: text,
        icon: "warning",
        dangerMode: true,
    })
}
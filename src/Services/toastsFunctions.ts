import { toast } from "react-toastify";

class ToastAlerts {
    toastError(message: string) {
        return toast.error(message, {
            position: 'top-right'
        })
    }
    toastSuccess(message: string) {
        return toast.success(message, {
            position: 'top-right'
        })
    }
    toastInfo(message: string) {
        return toast.info(message, {
            position: 'top-right'
        })
    }
}

export const toastsFunctions = new ToastAlerts()
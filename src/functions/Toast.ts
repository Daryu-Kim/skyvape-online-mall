import { toast } from "vue3-toastify";

export function clearToastMessages() {
    toast.clearAll();
}

export function showSuccessToastMessages(msg: string) {
    toast.success(msg);
}


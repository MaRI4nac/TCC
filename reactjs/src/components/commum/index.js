import { toast } from "react-toastify"

export function Validador(resp) {
    if (!resp.erro)
        return true;
    toast.dark(resp.erro)
    return false;
}
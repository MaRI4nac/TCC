
export function Validador(resp) {
    if (!resp.erro)
        return true
    alert(resp.erro)
    return false
}
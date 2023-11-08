import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(value: string){
    const date = formatDistanceToNow(new Date(value), {locale: ptBR, addSuffix: true})
    return date
}
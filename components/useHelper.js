export default function useHelper() {
    const truncate = (text, length=250) => {
        if(text.length>length){
            return text.slice(0, length)+'...'
        }

        return text
    }
    return {
        truncate
    }
}
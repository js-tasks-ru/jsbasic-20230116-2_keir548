function checkSpam(str) {
    // Сразу приравниваем строку к единому регистру, что бы не зависить от него
        let correctStr = str.toLowerCase()
        if (correctStr.includes('1xbet') || correctStr.includes('xxx')){
            return true
        } else return false
}

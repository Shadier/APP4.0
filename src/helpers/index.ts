export const timeAgo = (date: Date) => {
    let timeOffset = new Date().getTimezoneOffset() / 60;
    const dayOnMiliseconds = 86400000;
    const hourOnMiliseconds = 3600000;
    const minuteOnMilisecond = 60000;
    var DBdate = new Date (date)
    var currentDate = new Date()
    var text
    var diference = currentDate.getTime() - DBdate.setHours( DBdate.getHours() + timeOffset )

    if (diference > dayOnMiliseconds){
        let hour = DBdate.getHours()
        var format 
        format = (hour >= 12) ? format =' at ' + (hour - 12) + 'pm' : format =' at ' + hour + 'am'   
        text = 'Active ' + DBdate.getDate() + '.' + (DBdate.getMonth()+1) + '.' + DBdate.getFullYear() + format
    }
    else {
        var hours = Math.trunc( diference / hourOnMiliseconds )
        var residuo = diference % hourOnMiliseconds
        var minutes = Math.trunc( residuo / minuteOnMilisecond )
        if (hours < 1) text = 'Active ' + minutes + ' minutes ago.'
        else if(hours == 1) text = 'Active ' + hours + ' hour ' + minutes + ' minutes ago.'
        else  text = 'Active ' + hours + ' hours ' + minutes + ' minutes ago.'
    }
    return text
}



function currentDate(){
    return new Date().toTimeString();
}
function currentYear(){
    return new Date().getFullYear();
}

module.exports = {
    currentDate,
    currentYear
}
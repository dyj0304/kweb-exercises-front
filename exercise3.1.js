function isValidNumber(x){
    const temp = x%1;
    if(x-temp == x && x >=1 && x<=9) return true;
    else return false;
}
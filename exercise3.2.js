getDivisors(x){
    const div = [];
    for(let i=1;i<=Math.sqrt(x);i++){
        if(x%i == 0){
            if(x/i == i) div.push(i);
            else div.push(i, x/i);
        }
    }
    return div.sort((first, second) => first-second);
}
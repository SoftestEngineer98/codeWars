function digitize(n) {
    const answer =[]
        const str = n.toString()
    
        for(item of str){
        answer.unshift(parseInt(item))
        }
    
        return answer
    }
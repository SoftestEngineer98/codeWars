class SmallestIntegerFinder {
    findSmallestInt(args) {
        let min = args[0]
        console.log(args, args.length)
        for (let i = 0; i < args.length; i ++){
            console.log (i, args[i])
            if (args[i] < min){
                min = args[i]
            }
        }
        return min
    }
}
function calculateTip(amount, rating) {
    const raingName = rating.toUpperCase();
    
    switch (raingName) {
        case "EXCELLENT":
        return Math.ceil(amount * 0.2);
        
        case "GREAT":
        return Math.ceil(amount * 0.15);
        
        case "GOOD":
        return Math.ceil(amount * 0.1);
        
        case "POOR":
        return Math.ceil(amount * 0.05);
        
        case "TERRIBLE":
        return Math.ceil(amount * 0);
        
        default:
        return "Rating not recognised"
    }
}
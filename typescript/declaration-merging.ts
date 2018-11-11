namespace DeclarationMerging {

    interface Box {
        height: number;
        width: number;
    }
    
    interface Box {
        scale: number;
    }

    let box: Box = {height: 10, width: 20, scale: 25};
}
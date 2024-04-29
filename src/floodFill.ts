var floodFill = function(image, sr, sc, color) {
    if (image[sr]?.[sc] === undefined) {
        return image
    }

    const seed = image[sr][sc]
    image[sr][sc] = color
    floodFill2(image, sr+1, sc, color, seed)
    floodFill2(image, sr-1, sc, color, seed)
    floodFill2(image, sr, sc+1, color, seed)
    floodFill2(image, sr, sc-1, color, seed)

    return image
  };

  function floodFill2(image, sr, sc, color, seed) {
    if (image[sr]?.[sc] === undefined) {
        return image
    }

    if (image[sr][sc] === seed) {
        image[sr][sc] = color
        floodFill2(image, sr+1, sc, color, seed)
        floodFill2(image, sr-1, sc, color, seed)
        floodFill2(image, sr, sc+1, color, seed)
        floodFill2(image, sr, sc-1, color, seed)
    }

    return image
  }

  console.log(floodFill([[0,0,0],[0,0,0]],1 , 0 ,2))
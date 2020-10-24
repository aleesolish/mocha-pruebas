exports.suma = (a,b) => {
    return {x: a.x + b.x, y: a.y + b.y}
  }
  
exports.sub = (a,b) => {
    return {x: a.x - b.x, y: a.y - b.y}
  }

exports.scale = (a, c) => {
    return {x: a.x * c, y: a.y * c}
}

exports.dot = (a , b) => {
    return {d: a.x * b.x + a.y * b.y}
}
  
  

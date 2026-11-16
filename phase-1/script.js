const sessions = [{ min: 50 }, { min: 70 }, { min: 65 }];
const result = sessions.find(s => s.min > 60);
console.log(result);
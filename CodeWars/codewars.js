function toCamelCase(str) {
    //split the input string by dashes or underscores
    const words = str.split(/[-_]/);
    
    // 1st letter the 1st word to lowercase
    let result = words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {
      //capital the 1st letter of each word that follows
      result += words[i][0].toUpperCase() + words[1].slice(1);
    }
    
    return result;
  }
  
  console.log(toCamelCase("the-stealth-warrior")); //output: "theStealthWarrior"
  console.log(toCamelCase("The_Stealth_Warrior")); //output: "theStealthWarrior"
  console.log(toCamelCase("The_Stealth-Warrior")); //output: "theStealthWarrior"
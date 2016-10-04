function ransomNote(strMagazine, strRansom) {
  let magazine = strMagazine.split(" ");
  let ransom = strRansom.split(" ");
    for (let i = 0; i < magazine.length; i++) {
      if(ransom.includes(magazine[i])){
        ransom.splice(ransom.indexOf(magazine[i]), 1);
      }
      if (!ransom.length){
        return "Yes";
      }
    }
    return "No";
}

//ransomNote("you and me have only one reason to remember this day", "you have only one day");
//ransomNote("you and me have only one reason to remember this day", "you have only one night");
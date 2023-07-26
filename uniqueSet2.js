//Get a unique set of users from List2 which are not in List1

list1 = ["Arjun", "Adwait", "Swanil", "Amit", "Vishal", "Adan"];
list2 = ["Adwait", "Laxman", "Amit", "Adan", "Nitin", "Gaurav"];

const result = list2.filter((user)=> !list1.includes(user))
console.log(result)
//["Laxam", "Nition", "Gaurav"]
//Get a unique set of user from List1 which are not in List2

list1 = ["Arjun", "Adwait", "Swanil", "Amit", "Vishal", "Adan"];
list2 = ["Adwait", "Laxman", "Amit", "Adan", "Nitin", "Gaurav"];


const result = list1.filter((user)=> !list2.includes(user));
console.log(result)
//["Arjun", "Swanil", "Vishal"]
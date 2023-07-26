//Get a unique set of users who are present in in List1 and both List2 both(intersection of List1&List2)

list1 = ["Arjun", "Adwait", "Swanil", "Amit", "Vishal", "Adan"];
list2 = ["Adwait", "Laxman", "Amit", "Adan", "Nitin", "Gaurav"];

const result = list1.filter((user)=> list2.includes(user));
console.log(result)
//["Adwait", "Amit", "Adan"]
// Javascript strings
// Strings are something which are enclosed within double Quotes , single Quotes, backticks.

// ``, '', ""
// const name = new String("Mohit");
// console.log(name) Constructor Function

// const Name = "Mohit";
// console.log(Name) String literals

// Strings Methods
// 1. length : stringName.length
// const Name = "Mohit"; -> 'M','o','h','i,'t'
// console.log(Name.length); //properties

// 2. replace : stringName.replace(); // Methods
// const Name = "Rishi";
// const copy = Name.replace("Rishi","Mohit");
// console.log(copy);

// 3. replaceAll : stringName.replaceAll()
// const greet = "Hello Hello Hello";
// const copy = greet.replaceAll("Hello","bye");
// console.log(copy);

// 4. Split:- stringName.split();
// const Sentence = "Hello my name is rishi";
// const splited = Sentence.split("");
// console.log(splited);

// 5. Repeat :- stringName.reapet();
// const Name = "Rishi ";
// const copy = Name.repeat(4);
// console.log(copy)

// 6. trim :- stringName.trim()
// const Name = "              Mohit          ";
// console.log(Name.trim().length);

// 7. trimStart :- stringName.trimStart();
// const mohit = "        Mohit            ";
// console.log(mohit.trimStart().length);

// 8. trimEnd :- stringName.trimEnd();
// const mohit = "        Mohit            ";
// console.log(mohit.trimEnd().length);

// 9. Concat:- string.concat()
// const first_name = "Rishi";
// const last_name = "Raj";
// const id = "23"
// const domain = '@gmail.com'

// const Fmail = first_name.concat(last_name).concat(id).concat(domain);
// console.log(Fmail);

// 10. CharAt:- stringName.chatAt()
// const Domain = "@Yahoo.com";
// console.log(Domain.charAt(0));
// console.log(Domain.charAt((Domain.length-1) / 2));
// console.log(Domain.charAt(Domain.length-1));
// console.log(Domain.charAt(10));

// 11.CharCodeAt:- stringName.charCodeAt();
// const Name = "Rishi";
// console.log(Name.charCodeAt(0));

// 12. At:- stringName.At();
// const domain = "@microsoft.com";
// console.log(domain.charAt(domain.length-1));
// console.log(domain.at(-1));

// 13. slice:- stringName.slice();
// const Fmail = "MohitSingh111@gmail.com";
// const domain = Fmail.slice(13, Fmail.length);
// console.log(domain);

// 14. substring:- stringName.substring();
// const Fmail = "Mohitsingh222@gmail.com";
// const domain = Fmail.substring(13);
// console.log(domain);

// 15. UpperString:- stringName.toUpperCase();
// const lower = "mohit";
// console.log(lower.toUpperCase());

// 16. LowerString:- strngName.toLowerCase();
// const upper = 'Mohit';
// console.log(upper.toLowerCase());

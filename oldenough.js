const people = [
  {
    name: 'Jona (old enough)',
    dateOfBirth: '1990-10-20',
    address: 'Valencia',
    parents: [
      {
        name: 'Paco',
        address: 'Valencia',
        authorisesChild: true
      },
      {
        name: 'Mar',
        address: 'Valencia',
        authorisesChild: false
      }
    ]
  },
  {
    name: 'María (independent)',
    dateOfBirth: '2009-08-01',
    address: 'Sevilla',
    parents: [
      {
        name: 'Pablo',
        address: 'Valencia',
        authorisesChild: false
      },
      {
        name: 'Isabel',
        address: 'Valencia',
        authorisesChild: false
      }
    ]
  },
  {
    name: 'Miriam (can\'t work)',
    dateOfBirth: '2009-04-22',
    address: 'Madrid',
    parents: [
      {
        name: 'Juan',
        address: 'Madrid',
        authorisesChild: false
      },
      {
        name: 'Miriam',
        address: 'Madrid',
        authorisesChild: false
      }
    ]
  },
  {
    name: 'Marc (more than old enough)',
    dateOfBirth: '1986-02-22',
    address: 'Valencia',
    parents: [
      {
        name: 'Anthony',
        address: 'Horsham',
        authorisesChild: true
      },
      {
        name: 'Jane',
        address: 'Horsham',
        authorisesChild: true
      }
    ]
  },
  {
    name: 'Jack (with permission)',
    dateOfBirth: '2007-01-11',
    address: 'London',
    parents: [
      {
        name: 'David',
        address: 'London',
        authorisesChild: true
      },
      {
        name: 'Geraldine',
        address: 'Horsham',
        authorisesChild: false
      }
    ]
  }
];
const today = new Date();
// const test = {dateOfBirth: '2003-10-21'};

const whatsTheirAge = arr =>{
  const birthYear = parseInt(arr.dateOfBirth.slice(0,4));
  const birthMonth = parseInt(arr.dateOfBirth.slice(5,7));
  const birthDay = parseInt(arr.dateOfBirth.slice(8,10));
  let age = today.getFullYear()-birthYear;
  if (birthMonth > today.getMonth()+1){
    age --;
  }
  else if (birthMonth == today.getMonth()+1){
    if (birthDay > today.getDate()){
      age--;
    }
  }
  return age;
};

const whoCanWork = arr =>{
  const canWork = [];
  for (const person of arr){
    let independent = true;
    let permission = false;
    if (whatsTheirAge(person) >= 18){
      canWork.push(person);
    }
    for (const parent of person.parents){
      if (parent.address == person.address){
        independent = false;
      }
      if (parent.authorisesChild == true){
        permission = true;
      }
    }
    if (independent == true || permission == true){
      if (!canWork.includes(person)){
        canWork.push(person);
      }
    }
  }
  return canWork;
};
console.log(whoCanWork(people));
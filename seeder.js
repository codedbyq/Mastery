const User = require('./models/User');
const Skill = require('./models/Skill');
const Task = require('./models/Task');
const Follow = require('./models/Follow'); 

const bcrypt = require('bcryptjs');
const password = '123456'
const hash = bcrypt.hashSync(password, 10)

const seed = () => {  
  //seeding users
  User.collection.deleteMany({})

  const demo = new User ({
    username: 'demoUser',
    email: 'demo@demo.com',
    password: hash,
  });
  demo.save(); 

  const user1 = new User ({
    username: 'julie123',
    email: 'julie@julie.com',
    password: hash,
  });
  user1.save();

  const user2 = new User ({
    username: 'alvinzab',
    email: 'alvin@zablan.com',
    password: hash,
  });
  user2.save();

  const user3 = new User({
    username: 'chris123',
    email: 'chris@chris.com',
    password: hash,
  });
  user3.save();

  const user4 = new User ({
    username: 'jonnny123',
    email: 'jonny@gmail.com',
    password: hash,
  });
  user4.save();

  const user5 = new User({
    username: 'marquis123',
    email: 'marquis@marquis.com',
    password: hash,
  });
  user5.save();

  const user6 = new User({
    username: 'gilbert123',
    email: 'gilbert@gilbert.com',
    password: hash,
  });
  user6.save();



  //seeding skills
  Skill.collection.deleteMany({})

  const skillDemo1 = new Skill ({
    title: 'Run a marathon',
    description: 'My first marathon - SF 2021',
    category: 'Fitness & Well-Being',
    user: demo,
  });
  skillDemo1.save();

  const skillDemo2 = new Skill({
    title: 'Learn spanish',
    description: 'I want to travel and speak to locals. It is native language of more than 400 million people in 40+ countries.',
    category: 'Foreign Language',
    user: demo,
  });
  skillDemo2.save();

  const skillDemo3 = new Skill({
    title: 'Learn to code',
    description: 'Goal is to build full stack apps',
    category: 'Science & Technology',
    user: demo,
  });
  skillDemo3.save();

  const user2skill1 = new Skill({
    title: 'Master baking',
    description: "I can cook, but I can't bake",
    category: 'Culinary',
    user: user2
  })
  user2skill1.save();

  const user2skill2 = new Skill({
    title: 'Photography',
    description: "Take better photos",
    category: 'Hobbies',
    user: user2
  })
  user2skill2.save();

  const user2skill3 = new Skill({
    title: 'Pickup a Swift',
    description: "The use of Swift is growing, and I'd like to learn it",
    category: 'Science & Technology',
    user: user2
  })
  user2skill3.save();

  const user1skill1 = new Skill({
    title: 'Learn to cook',
    description: "Practical skill that I just haven't mastered",
    category: 'Culinary',
    user: user1,
  })
  user1skill1.save();

  const user1skill2 = new Skill({
    title: 'Master guitar',
    description: "Loved it as a kid and would like to pick it back up",
    category: 'Music & Entertainment',
    user: user1,
  })
  user1skill2.save();

  const user5skill = new Skill({
    title: 'Be a coding wizard',
    description: "Learn. Teach. Repeat.",
    category: 'Science & Technology',
    user: user5
  })
  user5skill.save();


  //seeding tasks
  Task.collection.deleteMany({})

  var date = new Date(); // today!
  // change x to set date x days back 
  // date.setDate(date.getDate() - x);

  const wizardTask = new Task({
    user: user5,
    skill: user5skill,
    title: 'Master coding',
    details: 'Learn to code better than Alvin',
    elapsedTime: 600000,
    creationDate: date.setDate(date.getDate() - 500),
  })
  wizardTask.save();

  const task1 = new Task ({
    user: demo,
    skill: skillDemo1,
    title: 'Long Run',
    details: '5 mile',
    elapsedTime: 50,
    creationDate: date.setDate(date.getDate() - 1),
  });
  task1.save();

  const task2 = new Task({
    user: demo,
    skill: skillDemo1,
    title: 'Tempo Run',
    details: 'morning run!',
    elapsedTime: 20,
    creationDate: date.setDate(date.getDate() - 3),
  });
  task2.save();

  const task3 = new Task({
    user: demo,
    skill: skillDemo1,
    title: 'Short Run',
    details: 'short and slow',
    elapsedTime: 30,
    creationDate: date.setDate(date.getDate() - 5),
  });
  task3.save();

  const task4 = new Task({
    user: demo,
    skill: skillDemo1,
    title: 'Distance',
    details: '7 mile',
    elapsedTime: 75,
    creationDate: date.setDate(date.getDate() - 9),
  });
  task4.save();

  const task5 = new Task({
    user: demo,
    skill: skillDemo1,
    title: 'Run',
    details: 'after work',
    elapsedTime: 35,
    creationDate: date.setDate(date.getDate() - 11),
  });
  task5.save();

  //////////////////////
  const task11 = new Task({
    user: demo,
    skill: skillDemo2,
    title: 'Vocab',
    details: 'Nouns',
    elapsedTime: 30,
    creationDate: date.setDate(date.getDate()),
  })
  task11.save();

  const task12 = new Task({
    user: demo,
    skill: skillDemo2,
    title: 'Vocab',
    details: 'common phrases',
    elapsedTime: 60,
    creationDate: date.setDate(date.getDate() - 2),
  })
  task12.save();

  const task13 = new Task({
    user: demo,
    skill: skillDemo2,
    title: 'Watched a movie in spanish',
    details: '',
    elapsedTime: 120,
    creationDate: date.setDate(date.getDate() - 5),
  })
  task13.save();

  const task14 = new Task({
    user: demo,
    skill: skillDemo2,
    title: 'duolingo',
    details: '',
    elapsedTime: 25,
    creationDate: date.setDate(date.getDate() - 8)
  })
  task14.save();

  const task15 = new Task({
    user: demo,
    skill: skillDemo2,
    title: 'duolingo',
    details: 'I got a badge!',
    elapsedTime: 45,
    creationDate: date.setDate(date.getDate() - 11)
  })
  task15.save();

  const task16 = new Task({
    user: demo,
    skill: skillDemo2,
    title: 'Vocab',
    details: 'conversation words',
    elapsedTime: 50,
    creationDate: date.setDate(date.getDate() - 15)
  })
  task16.save();

  const task17 = new Task({
    user: demo,
    skill: skillDemo2,
    title: 'Speaking practice',
    details: 'simple conversation',
    elapsedTime: 90,
    creationDate: date.setDate(date.getDate() - 18)
  })
  task17.save();

  const task18 = new Task({
    user: demo,
    skill: skillDemo2,
    title: 'duolingo',
    details: 'sentence structure',
    elapsedTime: 45,
    creationDate: date.setDate(date.getDate() - 21)
  })
  task18.save();

  ////////////////////////////////////
  const task21 = new Task({
    user: demo,
    skill: skillDemo3,
    title: 'intro to javascript',
    details: 'working on syntax',
    elapsedTime: 90,
    creationDate: date.setDate(date.getDate() - 11),
  });
  task21.save();

  const task22 = new Task({
    user: demo,
    skill: skillDemo3,
    title: 'Javascript videos',
    details: 'intro videos',
    elapsedTime: 45,
    creationDate: date.setDate(date.getDate() - 10),
  });
  task22.save();

  const task23 = new Task({
    user: demo,
    skill: skillDemo3,
    title: 'Javascript games',
    details: 'beginner games - enjoyed this!',
    elapsedTime: 45,
    creationDate: date.setDate(date.getDate() - 8),
  });
  task23.save();

  const task24 = new Task({
    user: demo,
    skill: skillDemo3,
    title: 'morning practice problems',
    details: 'DS&A',
    elapsedTime: 120,
    creationDate: date.setDate(date.getDate() - 6),
  });
  task24.save();

  const task25 = new Task({
    user: demo,
    skill: skillDemo3,
    title: 'Practie problems',
    details: 'more algorithms',
    elapsedTime: 70,
    creationDate: date.setDate(date.getDate() - 4),
  });
  task25.save();

  const task26 = new Task({
    user: demo,
    skill: skillDemo3,
    title: 'Online practie problems',
    details: 'algorithms',
    elapsedTime: 140,
    creationDate: date.setDate(date.getDate() - 3),
  });
  task26.save();
  
  const task27 = new Task({
    user: demo,
    skill: skillDemo3,
    title: 'Pair programming',
    details: 'things really clicked today!',
    elapsedTime: 200,
    creationDate: date.setDate(date.getDate() - 2),
  });
  task27.save();

  const task28 = new Task({
    user: demo,
    skill: skillDemo3,
    title: 'Pair programming',
    details: 'things really clicked today!',
    elapsedTime: 140,
    creationDate: date.setDate(date.getDate()),
  });
  task28.save();

  const task31 = new Task({
    user: user2,
    skill: user2skill1,
    title: 'Bake a Cake',
    details: 'Multi-layer, with icing, from scratch',
    elapsedTime: 180,
    creationDate: date.setDate(date.getDate() - 1),
  });
  task31.save();

  const task32 = new Task({
    user: user2,
    skill: user2skill2,
    title: 'Sunset pictures',
    details: 'Hiked at sunset.',
    elapsedTime: 180,
    creationDate: date.setDate(date.getDate()),
  });
  task32.save();

  const task33 = new Task({
    user: user2,
    skill: user2skill2,
    title: 'City Views',
    details: 'Playing with new camera',
    elapsedTime: 180,
    creationDate: date.setDate(date.getDate() - 5),
  });
  task33.save();

  //seeding follow
  Follow.collection.deleteMany({})

  const follow9 = new Follow({
    userId: demo,
    followerId: user1
  })
  follow9.save(); 

  const follow10 = new Follow({
    userId: demo,
    followerId: user2
  })
  follow10.save();

  const follow11 = new Follow({
    userId: demo,
    followerId: user3
  })
  follow11.save();

  const follow12 = new Follow({
    userId: demo,
    followerId: user4
  })
  follow12.save();

  const follow13 = new Follow({
    userId: demo,
    followerId: user5
  })
  follow13.save();

  const follow14 = new Follow({
    userId: demo,
    followerId: user6
  })
  follow14.save();

  const follow15 = new Follow({
    userId: user2,
    followerId: demo
  })
  follow15.save();

  const follow16 = new Follow({
    userId: user2,
    followerId: user1
  })
  follow16.save();

  const follow17 = new Follow({
    userId: user2,
    followerId: user3
  })
  follow17.save();

  const follow18 = new Follow({
    userId: user2,
    followerId: user4
  })
  follow18.save();

  const follow19 = new Follow({
    userId: user2,
    followerId: user5
  })
  follow19.save();

  const follow20 = new Follow({
    userId: user2,
    followerId: user6
  })
  follow20.save();

  const follow21 = new Follow({
    userId: user1,
    followerId: demo
  })
  follow21.save();

  const follow22 = new Follow({
    userId: user3,
    followerId: demo
  })
  follow22.save();

  const follow23 = new Follow({
    userId: user4,
    followerId: demo
  })
  follow23.save();

  const follow24 = new Follow({
    userId: user5,
    followerId: demo
  })
  follow24.save();

  const follow25 = new Follow({
    userId: user6,
    followerId: demo
  })
  follow25.save();
};

module.exports = seed;
// objects in js

let lecture= 10;
let section = 2;
let title = 'javascript';

const course = 
{
    lecture: 10,
    section: 2,
    title: 'javascript',
    notes:{
        introduction: "welcome to javascript"
    },
    enroll()
    {
        console.log('enrolled');
    }
}

course.enroll();
console.log(course.notes.introduction);
console.log(course);

//constructor function

function Course(lecture, section, title)
{
    this.lecture = lecture;
    this.section = section;
    this.title = title;
    this.enroll = function()
    {
        console.log('enrolled');
    }
}

const course1 = new Course(34, 12, 'css');
console.log(course1);

delete course1.lecture;
console.log(course1);

course1.newfunction = function()
{
    console.log('new function');
}

console.log(course1);


function topNStudents(students, attendees, N){
    const topStudents = [];
    const studentsAttendees = {};
    for(let i = 0; i < students.length; i++){
        studentsAttendees[students[i]] = 0;
    }

    for(let i = 0; i < attendees.length; i++){
        const dict = {};
        for(let j = 0; j < attendees[i].length; j++){
            const student = attendees[i][j];
            if(!dict[student]){
                studentsAttendees[student]++;
                dict[student] = 0;
            }
        }
    }

    let top = 0;
    let studentName;
    for(let i = 0; i < N; i++){
        for(let key in studentsAttendees){
            if(top < studentsAttendees[key]){
                top = studentsAttendees[key];
                studentName = key;
            }
        }
        delete studentsAttendees[studentName];
        top = 0;
        topStudents[topStudents.length] = studentName;
    }
    return topStudents;
}

const students = ['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas'];
const attendees = [['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas', 'Ortal'],
['Berry', 'Nitzan', 'Yoni', 'Eden', 'Hadas', 'Ortal'],
['Maxim', 'Ortal', 'Yoni', 'Refael', 'Nitzan', 'Alex'],
['Eden', 'Andrew', 'Yoni', 'Nitzan', 'Ortal','Nitzan']];
const N = 3;
let arr = topNStudents(students, attendees, N);



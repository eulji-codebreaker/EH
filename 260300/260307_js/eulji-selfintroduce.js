const student = {
    name: '김태완',
    college: '을지대학교',
    major: '빅데이터의료융합학과',
    grade: 4,
    number: 21,
    introduce: function (hello) {
        if(this.grade<4){console.log(`${hello} 저는 ${this.college} ${this.major} ${this.grade}학년 ${this.number}학번 ${this.name}입니다!`)}
        else{console.log(`${hello} 나는 ${this.college} ${this.major} ${this.grade}학년 ${this.number}학번 ${this.name}이야!`)}}
}

function Eulji(name, major, grade, number) {
    this.name = name;
    this.major = major;
    this.grade = grade;
    this.number = number;
};
Eulji.prototype = student;

var student1 = new Eulji('홍길동', '간호학과', 1, 26);
student1.introduce('반갑다!');
student.introduce('안녕하세요');
student.introduce('fff');
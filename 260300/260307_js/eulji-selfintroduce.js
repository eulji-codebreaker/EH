var student={
    name:'김태완',
    college:'을지대학교',
    major:'빅데이터의료융합학과',
    number:21,
    introduce:function(hello){
        console.log(`${hello} 저는 ${this.college} ${this.major} ${this.number}학번 ${this.name}입니다.`)
    }
}

function Eulji(name, major, number){
    this.name=name;
    this.major=major;
    this.number=number;
};
Eulji.prototype=student;

var student1=new Eulji('홍길동', '간호학과', 27);
student1.introduce('반갑다!');
student.introduce('안녕하세요');
student.introduce('fff');
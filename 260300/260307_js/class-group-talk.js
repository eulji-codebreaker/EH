function Group(prof, max){
    this.prof=prof;
    this.max=max;
    this.member=new Array(1);
}
const makeGroup={
    prof:undefined,
    max:null,
    initiallize:function(){this.member[0]=(this.prof);},
    add:function(person){if(this.member.length<this.max+1)this.member.push(person);else console.log('정원을 초과했습니다.')},
    remove:function(index){
        if(index===0)console.log('교수님은 삭제할 수 없습니다.')
        else if(index>this.member.length-1){console.log(`${index}번째 학생은 존재하지 않습니다.`)}
        else (this.member.splice(index,1))
    }
}
Group.prototype=makeGroup;
var math=new Group('이순신', 30);
math.initiallize();
var eng=new Group('오바마', 30);
eng.initiallize();

console.log(math);
console.log(eng);
for(let i=0;i<31;i++){eng.add(`student${i+1}`)};
console.log(eng.member);
eng.remove(0);
console.log(eng.member);
eng.remove(30);
console.log(eng.member);
eng.remove(15);
console.log(eng.member);
console.table(eng);
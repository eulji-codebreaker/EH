function Group(prof=undefined, max=null){
    this.prof=prof;
    this.max=max;
    this.member=new Array(1);
}
const makeGroup={
    initiallize:function(){this.member[0]=(this.prof);},
    setProf:function(prof){this.prof=prof;this.initiallize();},
    setMax:function(max){this.max=max;this.initiallize();},
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
var pe=new Group();

console.log(math);
console.log(eng);
for(let i=0;i<32;i++){eng.add(`student${i+1}`)};
console.log(eng.member);
eng.remove(0);
console.log(eng.member);
eng.remove(15);
console.log(eng.member);
console.log(math.member);
math.add('누구');
console.log(math.member);

console.log(pe);
pe.setMax(30);
pe.setProf('마동석');
console.log(pe);
function Group(prof, max){
    this.prof=prof;
    this.max=max;
    function initiallize(){}
}
const makeGroup={
    prof:undefined,
    max:null,
    member:new Array(1),
    initiallize:function(){this.member[0]=(this.prof);},
    add:function(person){if(this.member[this.max-1]===undefined)this.member.push(person)}
}
Group.prototype=makeGroup;
var math=new Group('이순신', 30);
var eng=new Group('오바마', 50);

console.log(math.prof);
console.log(math.member);
math.initiallize();
console.log(math.member);
console.log(math.member[0]);

console.log(eng);
eng.initiallize();
console.log(eng);
console.log(eng.member[0]);
console.log(eng.member);
eng.add('김태완');
console.log(eng.member);
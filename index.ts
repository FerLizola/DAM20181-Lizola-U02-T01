interface Person{
    name:string;
    email:string;
    salary: number;
    active:boolean;
}

var people=Array<Person>();

function createPeople():void{
    let newPerson:any;
    for(let i=0;i<10;i++){
        newPerson={
            name:`Fernando${i}`,
            email: `i${i}@gmail.com`,
            salary: (i+10000),
            active: i%2===0?true:false
        }
        people.push(newPerson);
    }
    newPerson={
        name:'Fernando MailInvalido',
        email: 'mailinvalido.com',
        salary:10000,
        active:true
    }
    people.push(newPerson);    
}
function imprimirValidos():void{
    //imprimir los que estan activo y que tienen una estructura de email valido
    
     let emailRegex= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    people.forEach(element => {
        if(emailRegex.test(element.email) && element.active){
            console.log("Nombre: "+element.name+" E-mail: "+element.email+" Salario:"+element.salary);
        }        
    });
}

createPeople();
imprimirValidos();
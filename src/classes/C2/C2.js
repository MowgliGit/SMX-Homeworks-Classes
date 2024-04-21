// function add(x, y){
//     console.log(x + y)
//     return x + y;
// }


// function Add({x,y}){
//     console.log(x + y);
//     return <>(x + y)</>;
// }
// function Person({name}){
//     return <div>I am {name}. I am the best</div>
// }
// function Button({ variant }){
//     return <button style={{ color : variant === "primary" ? "blue" : "gray"}}>
//         Click me
//     </button>
// }
// function DiscoveringProps({ number = 10, string, func }) {
//     return <>{number}</>
// }
// function DiscoveringProps(props) {
//     return <>{props.number}</>
// }
// function DiscoveringProps(props) {
//     const number = props.number || 10
//     const string = props.string;
//     const func = props.func;
//     return <>{number}</>
// }
// function DiscoveringProps(props) {
//     const { number = 10, string, func } = props
//     return <>{number}</>
// }


// function DiscoveringProps({
//     number,
//     string,
//     func,
//     obj,
//     array,
//     nan,
//     bool,
//     def,
// }){
//     return <></>
// }
function student({name, age, profesion, hobbies, cantDrive}){
    return `I am ${name}, ${age} years old, 
    and i am ${profesion}, for now my hobieas are 
    ${hobbies.join(" ")} and i ${cantDrive ? "can" : "can't"} can't drive </p>
    `
}

 function Student({name, age, profesion, hobbies, cantDrive}){
    return (
    <p>I am {name}, {age} years old, 
    and i am {profesion}, for now my hobieas are 
    {hobbies.join(", ")} and i {cantDrive ? "can" : "can't"} drive </p>
    )
}
function ConditionalRendering({name, age}){
    let surname = "Smith";
    let klasa = "blue";
    const ageCurrent = 25
    const isOldEnought = age >= 18;
    if(isOldEnought) {
        surname = "Davidovski";
        klasa = "green"
    }
    let classToUse = age >= 18 ? "green" : "Blue"
    function test(){
        return "Hi";
    }

    return (
    <div className={klasa}>
        <div className={classToUse}>
            Test {name} {surname} age is {ageCurrent}
        </div>
    </div>
    )
}

export default function C2() {
    return (
    <div>
        <ConditionalRendering name="Johnatan" age="{17}" />
        <Student name="Marina" 
        age="34" 
        profesion={"Front end Deweloper"}  
        hobbies={[" mountainering, swimming, reading "]}
        cantDrive={false}/>
        {/* <DiscoveringProps number={9}
        string={"Mario"}
        obj={{ a: 5}}
        array={[5, 4, 3]}
        bool={false}
        defaultt 
        // nan={Nan}
        funct={function test(params){

        }}
        func2={ test()}
        />
    {add(5, 6)}
    <br />
    {add(5, 5)}
    <br />
    {add(5, 3)}
    <br />
    <Add x={5} y={6} />
    <Button variant={"primary"} />
    <Button variant="secondary" />
    <Person name="Mario" />
    <Person name="Marina"/>
    <Person name="Simona"/>
    <Person name="Stole"/> */}
    </div>
    )
    
}

// i am a student my name is {} my age is {} my hobies are {} and i canotdrive



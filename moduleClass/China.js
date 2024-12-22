
const laptop = "Asus, Dell, Hp";

const mobiles = () =>{
    console.log("Mobile Phon From China");
}

const student = ()=>{
    const students = [
        {
            name: "Alfin",
            age: 26,
            salary: 50000,
            section: "Development",
            team: "Web Team",
        },
        {
            name: "Sharif",
            age: 28,
            salary: 80000,
            section: "Cyber Security",
            team: "Cyber Team",
        },
    ]
    console.log(students);
    // console.log(typeof (students))
}


// Creating Class
class ChinaClass{

    toys(){
        alert("Toys imported from China");
    }

}





// named export example here
// export {laptop, mobiles, student, ChinaClass};

// default export example here
export default ChinaClass;
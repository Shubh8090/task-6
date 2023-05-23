class person{
    constructor(name,address,phone,ocupation,job,hobbies){
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.ocupation = ocupation;
        this.job = job;
        this.hobbies = hobbies;
    }

    getpersonname(){
        console.log ("Name", this.name);
    }

    getpersonaddress(){
        console.log("Address", this.address);
    }

    getpersonphone(){
        console.log("Phone Number", this.phone);
    }

    getpersonocupation(){
        console.log("Ocupation", this.ocupation);
    }

    getpersonjob(){
        console.log("Job",this.job);
    }

    getpersonhobbies(){
        console.log("Hobbies",this.hobbies);
    }
}
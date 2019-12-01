// const companies =[{"name": "Demivee", "category": "jcb", "start": 1994, "end": 2011},
//     {"name": "Janyx", "category": "jcb", "start": 1998, "end": 1985},
//     {"name": "Realcube", "category": "jcb", "start": 2005, "end": 1998},
//     {"name": "Jayo", "category": "switch", "start": 1985, "end": 2011},
//     {"name": "Zoomcast", "category": "jcb", "start": 2000, "end": 2002},
//     {"name": "Tekfly", "category": "laser", "start": 1999, "end": 2009},
//     {"name": "Brainbox", "category": "jcb", "start": 1992, "end": 2006},
//     {"name": "Babblestorm", "category": "jcb", "start": 2008, "end": 2006},
//     {"name": "Quamba", "category": "china-unionpay", "start": 1997, "end": 1995},
//     {"name": "Vitz", "category": "jcb", "start": 2000, "end": 1995},
//     {"name": "Yotz", "category": "jcb", "start": 1998, "end": 2007},
//     {"name": "Eayo", "category": "jcb", "start": 1989, "end": 1995},
//     {"name": "Jetpulse", "category": "diners-club-international", "start": 1988, "end": 1995},
//     {"name": "Vinder", "category": "jcb", "start": 2001, "end": 2012},
//     {"name": "Bluejam", "category": "diners-club-enroute", "start": 1994, "end": 2006},
//     {"name": "Brainsphere", "category": "diners-club-international", "start": 2011, "end": 2006},
//     {"name": "Flipstorm", "category": "visa", "start": 2006, "end": 1988},
//     {"name": "Photospace", "category": "diners-club-enroute", "start": 1967, "end": 1983}
// ];

const ages = [41,32,19,45,34,25,26,28,32,45,67,71,18,19,16,76];

    //for loop
    // for (let i = 0; i < companies.length; i++) {
    //     console.table(companies[i]);
    // }

    //for Each
    // companies.forEach((company,index,companies) => console.table(company.name));

    //filtering in old way
    //1.Declare a new array
    // let canDrink = [];
    // //2.Start for loop
    // for(let i=0;i<ages.length;i++) {
    //     //3. check for each currently iteration is greater than 21
    //     if(ages[i] > 21) {
    //         //4. push the result to the canDrink array
    //         canDrink.push(ages[i]);
    //     }
    // }
    
    // console.table(canDrink);

    //Filter
    const canDrink = ages.filter((age,index,ages) => age > 21?true : false);

    console.table(canDrink);

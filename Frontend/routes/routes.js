
const randomColor = require("randomcolor")
const fetch = require("node-fetch")


exports.index = async (req, res) =>{    
    let fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        return data;
    };

    function init(data){
        const colors = randomColor({count:11})
        let q1 = data.question1Answers;
        let q2 = data.question2Answers;
        let q3 = data.question3Answers;

        let q1Color = [[q1[0], colors[0], "Pizza"], [q1[1], colors[1], "Hotdogs"], [q1[2], colors[2], "Hamburgers"], [q1[3], colors[3], "Other"]];
        let q2Color = [[q2[0], colors[4], "Smokey Bear"], [q2[1], colors[5], "Woodsy Owl"], [q2[2], colors[6], "McGruff the Crime Dog"]];
        let q3Color = [[q1[0], colors[7], "1 language"], [q1[1], colors[8], "2 languages"], [q1[2], colors[9], "3 languages"], [q1[3], colors[10],"4 or more languages"]];

        //console.log("q3: ", data.question3Answers);



        return({q1Color, q2Color, q3Color})

    }

    console.log(init(await fetchData("http://localhost:3000/api")))

    data = init(await fetchData("http://localhost:3000/api"))
    
    console.log(data)



    res.render("index",{
        parseData:data
    })
}


exports.rawdata = async(req, res) => {
    let fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        return data;
    };

    function init(data){
        const colors = randomColor({count:10})
        let q1 = data.question1Answers;
        let q2 = data.question2Answers;
        let q3 = data.question3Answers;

        let q1Color = [[q1[0], colors[0], "Pizza"], [q1[1], colors[1], "Hotdogs"], [q1[2], colors[2], "Hamburgers"], [q1[3], colors[3], "Other"]];
        let q2Color = [[q2[0], colors[4], "Smokey Bear"], [q2[1], colors[4], "Woodsy Owl"], [q2[2], colors[5], "McGruff the Crime Dog"]];
        let q3Color = [[q1[0], colors[6], "1 language"], [q1[1], colors[7], "2 languages"], [q1[2], colors[8], "3 languages"], [q1[3], colors[9],"4 or more languages"]];

        //console.log("q3: ", data.question3Answers);



        return({q1Color, q2Color, q3Color})

    }

    console.log(init(await fetchData("http://localhost:3000/api")))

    data = init(await fetchData("http://localhost:3000/api"))
    
    console.log(data)

    res.send(JSON.stringify(data))
}
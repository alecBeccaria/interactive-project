
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
        const colors = randomColor({count:10})
        let q1 = data.question1Answers;
        let q2 = data.question2Answers;
        let q3 = data.question3Answers;

        let q1Color = [[q1[0], colors[0]], [q1[1], colors[1]], [q1[2], colors[2]], [q1[3], colors[3]]];
        let q2Color = [[q2[0], colors[4]], [q2[1], colors[4]], [q2[2], colors[5]]];
        let q3Color = [[q1[0], colors[6]], [q1[1], colors[7]], [q1[2], colors[8]], [q1[3], colors[9]]];

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